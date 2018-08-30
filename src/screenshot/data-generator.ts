import * as d from '../declarations';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';


export async function startE2ESnapshot(config: d.Config) {
  const env = (process.env) as d.E2EProcessEnv;

  const tmpDir = config.sys.details.tmpDir;

  const imagesDir = config.sys.path.join(tmpDir, IMAGES_CACHE_DIR);
  try {
    await config.sys.fs.mkdir(imagesDir);
  } catch (e) {}

  env.__STENCIL_SCREENSHOT_IMAGES_DIR__ = imagesDir;

  const dataDir = config.sys.path.join(tmpDir, DATA_CACHE_DIR);
  try {
    await config.sys.fs.mkdir(dataDir);
  } catch (e) {}

  const snapshotId = getSnapshotId(env);

  const snapshotDataDir = config.sys.path.join(dataDir, snapshotId);
  try {
    await config.sys.fs.mkdir(snapshotDataDir);
  } catch (e) {}

  env.__STENCIL_SCREENSHOT_DATA_DIR__ = snapshotDataDir;

  const snapshot: d.E2ESnapshot = {
    id: snapshotId,
    msg: getSnapshotMessage(env),
    repoUrl: getRepoUrl(env),
    imagesDir: imagesDir,
    dataDir: dataDir,
    timestamp: Date.now()
  };

  config.logger.debug(`test e2e snapshot id: ${snapshotId}`);

  return snapshot;
}


export async function writeE2EScreenshot(screenshot: Buffer, uniqueDescription: string) {
  const env = (process.env) as d.E2EProcessEnv;

  if (typeof env.__STENCIL_SCREENSHOT_IMAGES_DIR__ !== 'string') {
    throw new Error(`writeE2EScreenshot, missing images directory env var`);
  }

  if (typeof env.__STENCIL_SCREENSHOT_DATA_DIR__ !== 'string') {
    throw new Error(`writeE2EScreenshot, missing data directory env var`);
  }

  if (typeof env.__STENCIL_EMULATE__ !== 'string') {
    throw new Error(`writeE2EScreenshot, missing screenshot emulate env var`);
  }

  const hash = crypto.createHash('md5').update(screenshot).digest('hex');

  const imageName = `${hash}.png`;
  const imagePath = path.join(env.__STENCIL_SCREENSHOT_IMAGES_DIR__, imageName);

  const imageExists = await fileExists(imagePath);
  if (!imageExists) {
    await writeFile(imagePath, screenshot);
  }

  const screenshotEmulate = JSON.parse(env.__STENCIL_EMULATE__) as d.ScreenshotEmulate;

  const id = getTestId(screenshotEmulate, uniqueDescription);

  const dataName = `${id}.json`;
  const dataPath = path.join(env.__STENCIL_SCREENSHOT_DATA_DIR__, dataName);

  const screenshotData: d.E2EScreenshot = {
    id: id,
    desc: uniqueDescription,
    image: imageName,
    device: screenshotEmulate.device,
    width: screenshotEmulate.width,
    height: screenshotEmulate.height,
    deviceScaleFactor: screenshotEmulate.deviceScaleFactor,
    hasTouch: screenshotEmulate.hasTouch,
    isLandscape: screenshotEmulate.isLandscape,
    isMobile: screenshotEmulate.isMobile,
    mediaType: screenshotEmulate.mediaType
  };

  await writeFile(dataPath, JSON.stringify(screenshotData));
}


export async function completeE2EScreenshots(config: d.Config, env: d.E2EProcessEnv, results: d.E2ESnapshot) {
  try {
    const snapshot = await consolidateData(config, results);

    const connector = await runScreenshotConnector(config, env, snapshot);

    await runScreenshotServer(config, env, connector);

  } catch (e) {
    config.logger.error(`completeE2EScreenshots, ${e}`);
  }
}


async function consolidateData(config: d.Config, results: d.E2ESnapshot) {
  const snapshotDataJsonDir = config.sys.path.join(results.dataDir, results.id);

  const snapshot: d.E2ESnapshot = {
    id: results.id,
    appRootDir: config.rootDir,
    packageDir: config.sys.compiler.packageDir,
    imagesDir: results.imagesDir,
    dataDir: results.dataDir,
    timestamp: results.timestamp,
    compilerVersion: config.sys.compiler.version,
    screenshots: []
  };

  const screenshotJsonFiles = await config.sys.fs.readdir(snapshotDataJsonDir);

  const unlinks: Promise<void>[] = [];

  screenshotJsonFiles.forEach(screenshotJsonFileName => {
    const screenshotJsonFilePath = config.sys.path.join(snapshotDataJsonDir, screenshotJsonFileName);

    const screenshotData: d.E2EScreenshot = JSON.parse(config.sys.fs.readFileSync(screenshotJsonFilePath));

    snapshot.screenshots.push(screenshotData);

    unlinks.push(config.sys.fs.unlink(screenshotJsonFilePath));
  });

  await Promise.all(unlinks);

  await config.sys.fs.rmdir(snapshotDataJsonDir);

  snapshot.screenshots.sort((a, b) => {
    if (a.desc < b.desc) return -1;
    if (a.desc > b.desc) return 1;
    return 0;
  });

  const snapshotDataJsonFileName = `${results.id}.json`;
  const snapshotDataJsonFilePath = config.sys.path.join(results.dataDir, snapshotDataJsonFileName);
  await config.sys.fs.writeFile(snapshotDataJsonFilePath, JSON.stringify(snapshot));

  return snapshot;
}


async function runScreenshotConnector(config: d.Config, env: d.E2EProcessEnv, snapshot: d.E2ESnapshot) {
  let connector: d.ScreenshotConnector = null;

  let connectorModulePath = env.STENCIL_SCREENSHOT_CONNECTOR;

  if (typeof connectorModulePath !== 'string' || !connectorModulePath) {
    connectorModulePath = config.sys.path.join(
      config.sys.compiler.packageDir, 'screenshot', 'screenshot.connector.default.js'
    );
  }

  try {
    const ScreenshotConnector = require(connectorModulePath);

    connector = new ScreenshotConnector();

    if (typeof connector.postSnapshot !== 'function') {
      throw new Error(`connector missing postSnapshot()`);
    }

    snapshot.channel = config.flags.channel || 'local';

    const timespan = config.logger.createTimeSpan(`saving screenshot data, channel: ${snapshot.channel}`);

    await connector.postSnapshot(snapshot);

    timespan.finish(`saving screenshot data finished`);

  } catch (e) {
    config.logger.error(`error running screenshot connector: ${connectorModulePath}, ${e}`);
    connector = null;
  }

  return connector;
}


async function runScreenshotServer(config: d.Config, env: d.E2EProcessEnv, connector: d.ScreenshotConnector) {
  if (!connector || !config.flags.compare) {
    return;
  }

  let serverModulePath = env.STENCIL_SCREENSHOT_SERVER;

  if (typeof serverModulePath !== 'string' || !serverModulePath) {
    serverModulePath = config.sys.path.join(
      config.sys.compiler.packageDir, 'screenshot', 'screenshot.server.default.js'
    );
  }

  try {
    const ScreenshotServer = require(serverModulePath);

    const server: d.ScreenshotServer = new ScreenshotServer();

    const serverInfo = await server.start(connector);
    config.logger.info(`screenshots: ${config.logger.magenta(serverInfo.url)}`);

    config.sys.open(serverInfo.url);

  } catch (e) {
    config.logger.error(`error running screenshot server: ${serverModulePath}, ${e}`);
  }
}


function getSnapshotId(env: d.E2EProcessEnv) {
  if (typeof env.STENCIL_COMMIT_ID === 'string' && env.STENCIL_COMMIT_ID.length > 3) {
    return env.STENCIL_COMMIT_ID;
  }

  env.STENCIL_COMMIT_ID = crypto.createHash('md5')
                          .update(Date.now().toString())
                          .digest('hex')
                          .substr(0, 8)
                          .toLowerCase();

  return env.STENCIL_COMMIT_ID;
}


function getSnapshotMessage(env: d.E2EProcessEnv) {
  if (typeof env.STENCIL_COMMIT_MESSAGE === 'string') {
    return env.STENCIL_COMMIT_MESSAGE;
  }

  env.STENCIL_COMMIT_MESSAGE = '';

  return env.STENCIL_COMMIT_MESSAGE;
}


function getRepoUrl(env: d.E2EProcessEnv) {
  if (typeof env.STENCIL_REPO_URL === 'string') {
    return env.STENCIL_REPO_URL;
  }

  env.STENCIL_REPO_URL = '';

  return env.STENCIL_REPO_URL;
}


function getTestId(screenshotEmulate: d.ScreenshotEmulate, uniqueDescription: string) {
  const hash = crypto.createHash('md5');

  hash.update(uniqueDescription);

  hash.update(screenshotEmulate.width.toString());
  hash.update(screenshotEmulate.height.toString());
  hash.update(screenshotEmulate.deviceScaleFactor.toString());
  hash.update(screenshotEmulate.userAgent.toString());
  hash.update(screenshotEmulate.hasTouch.toString());
  hash.update(screenshotEmulate.isMobile.toString());

  if (screenshotEmulate.mediaType != null) {
    hash.update(screenshotEmulate.mediaType);
  }

  return hash.digest('hex').substr(0, 8).toLowerCase();
}


function fileExists(filePath: string) {
  return new Promise<boolean>(resolve => {
    fs.access(filePath, (err: any) => resolve(!err));
  });
}

function writeFile(filePath: string, data: any) {
  return new Promise<boolean>((resolve, reject) => {
    fs.writeFile(filePath, data, (err: any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

const IMAGES_CACHE_DIR = 'stencil-e2e-screenshots';
const DATA_CACHE_DIR = 'stencil-e2e-data';
