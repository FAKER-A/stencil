/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as BACKDROP, b as dismiss, c as eventMethod, d as isCancel, e as present } from './chunk-20186de4.js';
import { a as getClassMap } from './chunk-f7b6af08.js';

/**
 * iOS Alert Enter Animation
 */
function iosEnterAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.3);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

/**
 * iOS Alert Leave Animation
 */
function iosLeaveAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.3, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

/**
 * Md Alert Enter Animation
 */
function mdEnterAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.5);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

/**
 * Md Alert Leave Animation
 */
function mdLeaveAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.5, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

class Alert {
    constructor() {
        this.processedInputs = [];
        this.processedButtons = [];
        this.presented = false;
        this.keyboardClose = true;
        /**
         * Array of buttons to be added to the alert.
         */
        this.buttons = [];
        /**
         * Array of input to show in the alert.
         */
        this.inputs = [];
        /**
         * If true, the alert will be dismissed when the backdrop is clicked. Defaults to `true`.
         */
        this.backdropDismiss = true;
        /**
         * If true, the alert will be translucent. Defaults to `false`.
         */
        this.translucent = false;
        /**
         * If true, the alert will animate. Defaults to `true`.
         */
        this.animated = true;
    }
    buttonsChanged() {
        const buttons = this.buttons;
        this.processedButtons = buttons.map(btn => {
            return (typeof btn === "string")
                ? { text: btn, role: btn.toLowerCase() === "cancel" ? "cancel" : undefined }
                : btn;
        }).filter(b => b != null);
    }
    inputsChanged() {
        const inputs = this.inputs;
        // An alert can be created with several different inputs. Radios,
        // checkboxes and inputs are all accepted, but they cannot be mixed.
        const inputTypes = new Set(inputs.map(i => i.type));
        if (inputTypes.has("checkbox") && inputTypes.has("radio")) {
            console.warn(`Alert cannot mix input types: ${(Array.from(inputTypes.values()).join("/"))}. Please see alert docs for more info.`);
        }
        this.inputType = inputTypes.values().next().value;
        this.processedInputs = inputs.map((i, index) => ({
            type: i.type || "text",
            name: i.name ? i.name : index + "",
            placeholder: i.placeholder ? i.placeholder : "",
            value: i.value ? i.value : "",
            label: i.label,
            checked: !!i.checked,
            disabled: !!i.disabled,
            id: i.id ? i.id : `alert-input-${this.overlayId}-${index}`,
            handler: i.handler,
            min: i.min,
            max: i.max
        }));
    }
    componentWillLoad() {
        this.inputsChanged();
        this.buttonsChanged();
    }
    componentDidLoad() {
        this.ionAlertDidLoad.emit();
    }
    componentDidUnload() {
        this.ionAlertDidUnload.emit();
    }
    onBackdropTap() {
        this.dismiss(null, BACKDROP);
    }
    dispatchCancelHandler(ev) {
        const role = ev.detail.role;
        if (isCancel(role)) {
            const cancelButton = this.processedButtons.find(b => b.role === "cancel");
            this.callButtonHandler(cancelButton);
        }
    }
    /**
     * Present the alert overlay after it has been created.
     */
    present() {
        return present(this, "alertEnter", iosEnterAnimation, mdEnterAnimation);
    }
    /**
     * Dismiss the alert overlay after it has been presented.
     */
    dismiss(data, role) {
        return dismiss(this, data, role, "alertLeave", iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the alert did dismiss. It also accepts a callback
     * that is called in the same circumstances.
     *
     */
    onDidDismiss(callback) {
        return eventMethod(this.el, "ionAlertDidDismiss", callback);
    }
    /**
     * Returns a promise that resolves when the alert will dismiss. It also accepts a callback
     * that is called in the same circumstances.
     *
     */
    onWillDismiss(callback) {
        return eventMethod(this.el, "ionAlertWillDismiss", callback);
    }
    rbClick(selectedInput) {
        for (const input of this.processedInputs) {
            input.checked = input === selectedInput;
        }
        this.activeId = selectedInput.id;
        if (selectedInput.handler) {
            selectedInput.handler(selectedInput);
        }
        this.el.forceUpdate();
    }
    cbClick(selectedInput) {
        selectedInput.checked = !selectedInput.checked;
        if (selectedInput.handler) {
            selectedInput.handler(selectedInput);
        }
        this.el.forceUpdate();
    }
    buttonClick(button) {
        const role = button.role;
        const values = this.getValues();
        if (isCancel(role)) {
            this.dismiss({ values }, role);
            return;
        }
        const returnData = this.callButtonHandler(button, values);
        if (returnData !== false) {
            this.dismiss(Object.assign({ values }, returnData), button.role);
        }
    }
    callButtonHandler(button, data) {
        if (button && button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            const returnData = button.handler(data);
            if (returnData === false) {
                // if the return value of the handler is false then do not dismiss
                return false;
            }
            if (typeof returnData === "object") {
                return returnData;
            }
        }
        return {};
    }
    getValues() {
        if (this.processedInputs.length === 0) {
            // this is an alert without any options/inputs at all
            return undefined;
        }
        if (this.inputType === "radio") {
            // this is an alert with radio buttons (single value select)
            // return the one value which is checked, otherwise undefined
            const checkedInput = this.processedInputs.find(i => i.checked === true);
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === "checkbox") {
            // this is an alert with checkboxes (multiple value select)
            // return an array of all the checked values
            return this.processedInputs.filter(i => i.checked).map(i => i.value);
        }
        // this is an alert with text inputs
        // return an object of all the values with the input name as the key
        const values = {};
        this.processedInputs.forEach(i => {
            values[i.name] = i.value || "";
        });
        return values;
    }
    renderAlertInputs(labelledBy) {
        switch (this.inputType) {
            case "checkbox": return this.renderCheckbox(labelledBy);
            case "radio": return this.renderRadio(labelledBy);
            default: return this.renderInput(labelledBy);
        }
    }
    renderCheckbox(labelledby) {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-checkbox-group", "aria-labelledby": labelledby }, inputs.map(i => (h("button", { type: "button", onClick: () => this.cbClick(i), "aria-checked": i.checked ? "true" : null, id: i.id, disabled: i.disabled, tabIndex: 0, role: "checkbox", class: "alert-tappable alert-checkbox alert-checkbox-button" }, h("div", { class: "alert-button-inner" }, h("div", { class: "alert-checkbox-icon" }, h("div", { class: "alert-checkbox-inner" })), h("div", { class: "alert-checkbox-label" }, i.label)), this.mode === "md" && h("ion-ripple-effect", null))))));
    }
    renderRadio(labelledby) {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-radio-group", role: "radiogroup", "aria-labelledby": labelledby, "aria-activedescendant": this.activeId }, inputs.map(i => (h("button", { type: "button", onClick: () => this.rbClick(i), "aria-checked": i.checked ? "true" : null, disabled: i.disabled, id: i.id, tabIndex: 0, class: "alert-radio-button alert-tappable alert-radio", role: "radio" }, h("div", { class: "alert-button-inner" }, h("div", { class: "alert-radio-icon" }, h("div", { class: "alert-radio-inner" })), h("div", { class: "alert-radio-label" }, i.label)), this.mode === "md" && h("ion-ripple-effect", null))))));
    }
    renderInput(labelledby) {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-input-group", "aria-labelledby": labelledby }, inputs.map(i => (h("div", { class: "alert-input-wrapper" }, h("input", { placeholder: i.placeholder, value: i.value, type: i.type, min: i.min, max: i.max, onInput: e => i.value = e.target.value, id: i.id, disabled: i.disabled, tabIndex: 0, class: "alert-input" }))))));
    }
    hostData() {
        return {
            role: "alertdialog",
            style: {
                zIndex: 20000 + this.overlayId,
            },
            class: Object.assign({}, getClassMap(this.cssClass), { "alert-translucent": this.translucent })
        };
    }
    renderAlertButtons() {
        const buttons = this.processedButtons;
        const alertButtonGroupClass = {
            "alert-button-group": true,
            "alert-button-group-vertical": buttons.length > 2
        };
        return (h("div", { class: alertButtonGroupClass }, buttons.map(button => h("button", { type: "button", "ion-activable": true, class: buttonClass(button), tabIndex: 0, onClick: () => this.buttonClick(button) }, h("span", { class: "alert-button-inner" }, button.text)))));
    }
    render() {
        const hdrId = `alert-${this.overlayId}-hdr`;
        const subHdrId = `alert-${this.overlayId}-sub-hdr`;
        const msgId = `alert-${this.overlayId}-msg`;
        let labelledById;
        if (this.header) {
            labelledById = hdrId;
        }
        else if (this.subHeader) {
            labelledById = subHdrId;
        }
        return [
            h("ion-backdrop", { tappable: this.backdropDismiss }),
            h("div", { class: "alert-wrapper" }, h("div", { class: "alert-head" }, this.header && h("h2", { id: hdrId, class: "alert-title" }, this.header), this.subHeader && h("h2", { id: subHdrId, class: "alert-sub-title" }, this.subHeader)), h("div", { id: msgId, class: "alert-message", innerHTML: this.message }), this.renderAlertInputs(labelledById), this.renderAlertButtons())
        ];
    }
    static get is() { return "ion-alert"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "animationCtrl": {
                "connect": "ion-animation-controller"
            },
            "backdropDismiss": {
                "type": Boolean,
                "attr": "backdrop-dismiss"
            },
            "buttons": {
                "type": "Any",
                "attr": "buttons",
                "watchCallbacks": ["buttonsChanged"]
            },
            "config": {
                "context": "config"
            },
            "cssClass": {
                "type": String,
                "attr": "css-class"
            },
            "dismiss": {
                "method": true
            },
            "el": {
                "elementRef": true
            },
            "enterAnimation": {
                "type": "Any",
                "attr": "enter-animation"
            },
            "header": {
                "type": String,
                "attr": "header"
            },
            "inputs": {
                "type": "Any",
                "attr": "inputs",
                "mutable": true,
                "watchCallbacks": ["inputsChanged"]
            },
            "keyboardClose": {
                "type": Boolean,
                "attr": "keyboard-close"
            },
            "leaveAnimation": {
                "type": "Any",
                "attr": "leave-animation"
            },
            "message": {
                "type": String,
                "attr": "message"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "onDidDismiss": {
                "method": true
            },
            "onWillDismiss": {
                "method": true
            },
            "overlayId": {
                "type": Number,
                "attr": "overlay-id"
            },
            "present": {
                "method": true
            },
            "subHeader": {
                "type": String,
                "attr": "sub-header"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionAlertDidLoad",
                "method": "ionAlertDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertDidUnload",
                "method": "ionAlertDidUnload",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertDidPresent",
                "method": "didPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertWillPresent",
                "method": "willPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertWillDismiss",
                "method": "willDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertDidDismiss",
                "method": "didDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "ionBackdropTap",
                "method": "onBackdropTap"
            }, {
                "name": "ionAlertWillDismiss",
                "method": "dispatchCancelHandler"
            }];
    }
    static get style() { return ":host {\n  --min-width: 250px;\n  --max-height: 90%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-family: var(--ion-font-family, inherit);\n  contain: strict;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1000; }\n\n:host(.alert-top) {\n  padding-top: 50px;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.alert-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  max-height: var(--max-height);\n  background: var(--background);\n  contain: content;\n  opacity: 0;\n  z-index: 10; }\n\n.alert-title {\n  margin: 0;\n  padding: 0; }\n\n.alert-sub-title {\n  margin: 5px 0 0;\n  padding: 0;\n  font-weight: normal; }\n\n.alert-message {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: scroll;\n  overscroll-behavior-y: contain; }\n\n.alert-message::-webkit-scrollbar {\n  display: none; }\n\n.alert-input {\n  padding: 10px 0;\n  width: 100%;\n  border: 0;\n  background: inherit;\n  font: inherit;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.alert-button-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  width: 100%; }\n\n.alert-button-group-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap; }\n\n.alert-button {\n  margin: 0;\n  display: block;\n  border: 0;\n  font-size: 14px;\n  line-height: 20px;\n  z-index: 0; }\n\n.alert-button-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\n.alert-tappable {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  font-size: inherit;\n  line-height: initial;\n  text-align: start;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.alert-button:active, .alert-button:focus,\n.alert-checkbox:active,\n.alert-checkbox:focus,\n.alert-input:active,\n.alert-input:focus,\n.alert-radio:active,\n.alert-radio:focus {\n  outline: none; }\n\n.alert-radio-icon,\n.alert-checkbox-icon,\n.alert-checkbox-inner {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host {\n  --background: var(--ion-overlay-background-color, #f9f9f9);\n  --max-width: 270px;\n  font-size: 14px; }\n\n.alert-wrapper {\n  border-radius: 13px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  overflow: hidden; }\n\n:host(.alert-translucent) .alert-wrapper {\n  background: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px); }\n\n.alert-head {\n  padding: 12px 16px 7px;\n  text-align: center; }\n\n.alert-title {\n  margin-top: 8px;\n  color: var(--ion-text-color, #000);\n  font-size: 17px;\n  font-weight: 600; }\n\n.alert-sub-title {\n  color: var(--ion-text-color-step-400, #666666);\n  font-size: 14px; }\n\n.alert-message,\n.alert-input-group {\n  padding: 0 16px 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 13px;\n  text-align: center; }\n\n.alert-message {\n  max-height: 240px; }\n\n.alert-message:empty {\n  padding: 0 0 12px; }\n\n.alert-input {\n  border-radius: 4px;\n  margin-top: 10px;\n  padding: 6px;\n  border: 0.55px solid var(--ion-background-color-step-250, #bfbfbf);\n  background-color: var(--ion-background-color, #fff);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  .alert-input::-webkit-input-placeholder {\n    color: var(--ion-placeholder-text-color, #999);\n    font-family: inherit;\n    font-weight: inherit; }\n  .alert-input:-ms-input-placeholder {\n    color: var(--ion-placeholder-text-color, #999);\n    font-family: inherit;\n    font-weight: inherit; }\n  .alert-input::-ms-input-placeholder {\n    color: var(--ion-placeholder-text-color, #999);\n    font-family: inherit;\n    font-weight: inherit; }\n  .alert-input::placeholder {\n    color: var(--ion-placeholder-text-color, #999);\n    font-family: inherit;\n    font-weight: inherit; }\n\n.alert-radio-group,\n.alert-checkbox-group {\n  -ms-scroll-chaining: none;\n  overscroll-behavior: contain;\n  max-height: 240px;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch; }\n\n.alert-tappable {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 44px;\n  contain: strict; }\n\n.alert-radio-label {\n  padding: 13px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-ordinal-group: 1;\n  -ms-flex-order: 0;\n  order: 0;\n  color: var(--ion-text-color, #000);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n[aria-checked=true] .alert-radio-label {\n  color: var(--ion-color-primary, #3880ff); }\n\n.alert-radio-icon {\n  position: relative;\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  min-width: 30px; }\n\n[aria-checked=true] .alert-radio-inner {\n  left: 7px;\n  top: -7px;\n  position: absolute;\n  width: 6px;\n  height: 12px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--ion-color-primary, #3880ff); }\n\n.alert-checkbox-label {\n  padding: 13px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  color: var(--ion-text-color, #000);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.alert-checkbox-icon {\n  border-radius: 50%;\n  margin: 10px 6px 10px 16px;\n  position: relative;\n  width: 24px;\n  height: 24px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--ion-item-border-color, #c8c7cc);\n  background-color: var(--ion-item-background-color, var(--ion-background-color, #fff));\n  contain: strict; }\n\n[aria-checked=true] .alert-checkbox-icon {\n  border-color: var(--ion-color-primary, #3880ff);\n  background-color: var(--ion-color-primary, #3880ff); }\n\n[aria-checked=true] .alert-checkbox-inner {\n  left: 9px;\n  top: 4px;\n  position: absolute;\n  width: 5px;\n  height: 12px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border-width: 1px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--ion-background-color, #fff); }\n\n.alert-button-group {\n  margin-right: -0.55px;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.alert-button {\n  margin: 0;\n  border-radius: 0;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  min-width: 50%;\n  height: 44px;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);\n  border-right: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n  font-size: 17px;\n  overflow: hidden; }\n\n.alert-button:last-child {\n  border-right: 0;\n  font-weight: bold; }\n\n.alert-button.activated {\n  background-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1); }"; }
    static get styleMode() { return "ios"; }
}
function buttonClass(button) {
    return Object.assign({ "alert-button": true }, getClassMap(button.cssClass));
}

export { Alert as IonAlert };
