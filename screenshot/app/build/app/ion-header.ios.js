/*! Built with http://stenciljs.com */
const { h } = window.App;

import { d as createThemedClasses } from './chunk-f7b6af08.js';

class Header {
    constructor() {
        /**
         * If true, the header will be translucent.
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         * Defaults to `false`.
         */
        this.translucent = false;
    }
    hostData() {
        const themedClasses = createThemedClasses(this.mode, "header");
        const translucentClasses = this.translucent ? createThemedClasses(this.mode, "header-translucent") : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    }
    static get is() { return "ion-header"; }
    static get properties() {
        return {
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get style() { return "ion-header {\n  display: block;\n  position: relative;\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n  width: 100%;\n  z-index: 10; }\n\nion-header ion-toolbar:first-child {\n  padding-top: var(--ion-safe-area-top, 0); }\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px; }\n\n.header-ios[no-border] ion-toolbar:last-child {\n  --border-width: 0; }\n\n.header-translucent-ios {\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px); }\n\n.header-translucent-ios ion-toolbar {\n  --opacity: .8;\n  --backdrop-filter: saturate(180%) blur(20px); }"; }
    static get styleMode() { return "ios"; }
}

export { Header as IonHeader };
