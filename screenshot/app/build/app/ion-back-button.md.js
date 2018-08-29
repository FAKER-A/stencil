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
    static get style() { return ":host {\n  display: none;\n  color: var(--ion-color-base);\n  pointer-events: all;\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-font-kerning: none;\n  font-kerning: none; }\n\n:host-context(.can-go-back > ion-header),\n:host(.show-back-button) {\n  display: block; }\n\n.back-button-native {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  border: 0;\n  outline: none;\n  line-height: 1;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.back-button-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\n.back-button-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n:host {\n  --ion-color-base: currentColor; }\n\n.back-button-native {\n  margin: 1px 6px 0 0;\n  padding: 0 5px;\n  min-width: 44px;\n  height: 32px;\n  border: 0;\n  background-color: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n  .back-button-native.activated {\n    opacity: .4; }\n\nion-icon {\n  padding-right: 0.3em;\n  margin: 0;\n  margin: 0 6px;\n  font-size: 24px;\n  font-weight: normal;\n  line-height: .67;\n  text-align: start;\n  pointer-events: none; }"; }
    static get styleMode() { return "md"; }
}

class Buttons {
    static get is() { return "ion-buttons"; }
    static get encapsulation() { return "scoped"; }
    static get style() { return ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  z-index: 99;\n  pointer-events: none; }\n\n::slotted(*) .button {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --margin-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --box-shadow: none;\n  margin-left: 2px;\n  margin-right: 2px;\n  pointer-events: auto; }\n\n::slotted(*) .button {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --height: 32px;\n  --box-shadow: none;\n  font-size: 14px;\n  font-weight: 500; }\n\n::slotted(*) .button:not(.button-round) {\n  --border-radius: 2px; }\n\n::slotted(*) ion-icon[slot=\"start\"] {\n  margin: 0;\n  margin-right: 0.3em;\n  font-size: 1.4em;\n  pointer-events: none; }\n\n::slotted(*) ion-icon[slot=\"end\"] {\n  margin: 0;\n  margin-left: 0.4em;\n  font-size: 1.4em;\n  pointer-events: none; }\n\n::slotted(*) ion-icon[slot=\"icon-only\"] {\n  padding: 0;\n  margin: 0;\n  font-size: 1.8em;\n  pointer-events: none; }\n\n::slotted(*) .button.button-solid,\n::slotted(*) .button.button-outline {\n  --ion-color-base: var(--ion-toolbar-text-color, #424242);\n  --ion-color-contrast: var(--ion-toolbar-background-color, #f8f8f8);\n  --ion-color-shade: var(--ion-toolbar-text-color, #424242); }\n\n::slotted(*) .button.button-clear {\n  --ion-color-base: currentColor;\n  --height: 45px; }\n\n:host([slot=\"start\"]) {\n  -webkit-box-ordinal-group: 3;\n  -ms-flex-order: 2;\n  order: 2; }\n\n:host([slot=\"secondary\"]) {\n  -webkit-box-ordinal-group: 5;\n  -ms-flex-order: 4;\n  order: 4; }\n\n:host([slot=\"primary\"]) {\n  -webkit-box-ordinal-group: 6;\n  -ms-flex-order: 5;\n  order: 5;\n  text-align: end; }\n\n:host([slot=\"end\"]) {\n  -webkit-box-ordinal-group: 7;\n  -ms-flex-order: 6;\n  order: 6;\n  text-align: end; }"; }
    static get styleMode() { return "md"; }
}

export { BackButton as IonBackButton, Buttons as IonButtons };
