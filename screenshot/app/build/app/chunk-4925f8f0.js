/*! Built with http://stenciljs.com */
const { h } = window.App;

function setMasterSnapshot(snapshotId) {
    console.log('setMasterSnapshot', snapshotId);
    return Promise.resolve();
}
function deleteSnapshot(snapshotId) {
    console.log('deleteSnapshot', snapshotId);
    return Promise.resolve();
}
function formatDate(timestamp) {
    var d = new Date(timestamp);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
}

export { formatDate as a, deleteSnapshot as b, setMasterSnapshot as c };
