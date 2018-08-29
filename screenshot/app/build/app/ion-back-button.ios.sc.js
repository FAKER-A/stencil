/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as createColorClasses, c as openURL } from './chunk-f7b6af08.js';

class BackButton {
    async onClick(ev) {
        const nav = this.el.closest("ion-nav");
        if (nav && nav.canGoBack()) {
            ev.preventDefault();
            if (!nav.isAnimating()) {
                nav.pop();
            }
        }
        else if (this.defaultHref) {
            openURL(this.win, this.defaultHref, ev, "back");
        }
    }
    hostData() {
        const showBackButton = !!this.defaultHref;
        return {
            class: Object.assign({}, createColorClasses(this.color), { "button": true, "show-back-button": showBackButton }),
            "ion-activable": true,
        };
    }
    render() {
        const backButtonIcon = this.icon || this.config.get("backButtonIcon", "arrow-back");
        const backButtonText = this.text != null ? this.text : this.config.get("backButtonText", "Back");
        return (h("button", { type: "button", class: "back-button-native", onClick: ev => this.onClick(ev) }, h("span", { class: "back-button-inner" }, backButtonIcon && h("ion-icon", { icon: backButtonIcon, lazy: false }), this.mode === "ios" && backButtonText && h("span", { class: "button-text" }, backButtonText), this.mode === "md" && h("ion-ripple-effect", null))));
    }
    static get is() { return "ion-back-button"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "config": {
                "context": "config"
            },
            "defaultHref": {
                "type": String,
                "attr": "default-href"
            },
            "el": {
                "elementRef": true
            },
            "icon": {
                "type": String,
                "attr": "icon"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "text": {
                "type": String,
                "attr": "text"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get style() { return "\n.sc-ion-back-button-ios-h {\n  display: none;\n  color: var(--ion-color-base);\n  pointer-events: all;\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-font-kerning: none;\n  font-kerning: none; }\n\n.can-go-back.sc-ion-back-button-ios-h    > ion-header.sc-ion-back-button-ios, .can-go-back    > ion-header   .sc-ion-back-button-ios-h, .show-back-button.sc-ion-back-button-ios-h {\n  display: block; }\n\n.back-button-native.sc-ion-back-button-ios {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  border: 0;\n  outline: none;\n  line-height: 1;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.back-button-inner.sc-ion-back-button-ios {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\n.back-button-text.sc-ion-back-button-ios {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.sc-ion-back-button-ios-h {\n  --ion-color-base: var(--ion-color-primary, #3880ff); }\n\n.back-button-native.sc-ion-back-button-ios {\n  padding: 0;\n  margin: 0;\n  min-height: 32px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  border: 0;\n  background-color: transparent;\n  font-size: 17px;\n  line-height: 1;\n  overflow: visible;\n  z-index: 99; }\n  .back-button-native.activated.sc-ion-back-button-ios {\n    opacity: .4; }\n\nion-icon.sc-ion-back-button-ios {\n  padding: 0;\n  margin: 0 -5px 0 -4px;\n  display: inherit;\n  font-size: 1.85em;\n  pointer-events: none; }\n"; }
    static get styleMode() { return "ios"; }
}

class Buttons {
    static get is() { return "ion-buttons"; }
    static get encapsulation() { return "scoped"; }
    static get style() { return "\n.sc-ion-buttons-ios-h {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  z-index: 99;\n  pointer-events: none; }\n\n.sc-ion-buttons-ios-s  .button  {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --margin-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --box-shadow: none;\n  margin-left: 2px;\n  margin-right: 2px;\n  pointer-events: auto; }\n\n.sc-ion-buttons-ios-s  .button  {\n  --padding-top: 0;\n  --pading-bottom: 0;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  --height: 32px;\n  font-size: 17px;\n  font-weight: 400; }\n\n.sc-ion-buttons-ios-s  .button:not(.button-round)  {\n  --border-radius: 4px; }\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button  {\n  --ion-color-base: currentColor; }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"start\"]  {\n  margin: 0;\n  margin-right: 0.3em;\n  font-size: 24px;\n  line-height: .67;\n  pointer-events: none; }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"end\"]  {\n  margin: 0;\n  margin-left: 0.4em;\n  font-size: 24px;\n  line-height: .67;\n  pointer-events: none; }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"icon-only\"]  {\n  padding: 0;\n  margin: 0;\n  font-size: 31px;\n  line-height: .67;\n  pointer-events: none; }\n\n.sc-ion-buttons-ios-s  .button.button-clear  {\n  --height: 35px; }\n\n.sc-ion-buttons-ios-s  .button.button-solid-ios:hover  {\n  opacity: .4; }\n\n[slot=\"start\"].sc-ion-buttons-ios-h {\n  -webkit-box-ordinal-group: 3;\n  -ms-flex-order: 2;\n  order: 2; }\n\n[slot=\"secondary\"].sc-ion-buttons-ios-h {\n  -webkit-box-ordinal-group: 4;\n  -ms-flex-order: 3;\n  order: 3; }\n\n[slot=\"primary\"].sc-ion-buttons-ios-h {\n  -webkit-box-ordinal-group: 6;\n  -ms-flex-order: 5;\n  order: 5;\n  text-align: end; }\n\n[slot=\"end\"].sc-ion-buttons-ios-h {\n  -webkit-box-ordinal-group: 7;\n  -ms-flex-order: 6;\n  order: 6;\n  text-align: end; }\n"; }
    static get styleMode() { return "ios"; }
}

export { BackButton as IonBackButton, Buttons as IonButtons };
