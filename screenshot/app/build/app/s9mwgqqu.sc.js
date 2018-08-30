/*! Built with http://stenciljs.com */
const{h:e}=window.App;import{a as t,b as s,c as a,d as n,e as r}from"./chunk-b48a0e4c.js";import{a as i}from"./chunk-f7b6af08.js";function l(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const n=new e;n.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.01,.3),n.fromTo("opacity",.01,1).fromTo("scale",1.1,1);const r=s.addElement(t).easing("ease-in-out").duration(200).add(a).add(n);return Promise.resolve(r)}function o(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const n=new e;n.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.3,0),n.fromTo("opacity",.99,0).fromTo("scale",1,.9);const r=s.addElement(t).easing("ease-in-out").duration(200).add(a).add(n);return Promise.resolve(r)}function d(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const n=new e;return n.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.01,.5),n.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(s.addElement(t).easing("ease-in-out").duration(200).add(a).add(n))}function c(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const n=new e;return n.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.5,0),n.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(s.addElement(t).easing("ease-in-out").duration(200).add(a).add(n))}class u{constructor(){this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}buttonsChanged(){const e=this.buttons;this.processedButtons=e.map(e=>"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e).filter(e=>null!=e)}inputsChanged(){const e=this.inputs,t=new Set(e.map(e=>e.type));t.has("checkbox")&&t.has("radio")&&console.warn(`Alert cannot mix input types: ${Array.from(t.values()).join("/")}. Please see alert docs for more info.`),this.inputType=t.values().next().value,this.processedInputs=e.map((e,t)=>({type:e.type||"text",name:e.name?e.name:t+"",placeholder:e.placeholder?e.placeholder:"",value:e.value?e.value:"",label:e.label,checked:!!e.checked,disabled:!!e.disabled,id:e.id?e.id:`alert-input-${this.overlayIndex}-${t}`,handler:e.handler,min:e.min,max:e.max}))}componentWillLoad(){this.inputsChanged(),this.buttonsChanged()}componentDidLoad(){this.ionAlertDidLoad.emit()}componentDidUnload(){this.ionAlertDidUnload.emit()}onBackdropTap(){this.dismiss(null,t)}dispatchCancelHandler(e){const t=e.detail.role;if(n(t)){const e=this.processedButtons.find(e=>"cancel"===e.role);this.callButtonHandler(e)}}present(){return r(this,"alertEnter",l,d)}dismiss(e,t){return s(this,e,t,"alertLeave",o,c)}onDidDismiss(){return a(this.el,"ionAlertDidDismiss")}onWillDismiss(){return a(this.el,"ionAlertWillDismiss")}rbClick(e){for(const t of this.processedInputs)t.checked=t===e;this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()}cbClick(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()}buttonClick(e){const t=e.role,s=this.getValues();if(n(t))return void this.dismiss({values:s},t);const a=this.callButtonHandler(e,s);!1!==a&&this.dismiss(Object.assign({values:s},a),e.role)}callButtonHandler(e,t){if(e&&e.handler){const s=e.handler(t);if(!1===s)return!1;if("object"==typeof s)return s}return{}}getValues(){if(0===this.processedInputs.length)return;if("radio"===this.inputType){const e=this.processedInputs.find(e=>!0===e.checked);return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(e=>e.checked).map(e=>e.value);const e={};return this.processedInputs.forEach(t=>{e[t.name]=t.value||""}),e}renderAlertInputs(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}}renderCheckbox(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-checkbox-group","aria-labelledby":t},s.map(t=>e("button",{type:"button",onClick:()=>this.cbClick(t),"aria-checked":t.checked?"true":null,id:t.id,disabled:t.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button"},e("div",{class:"alert-button-inner"},e("div",{class:"alert-checkbox-icon"},e("div",{class:"alert-checkbox-inner"})),e("div",{class:"alert-checkbox-label"},t.label)),"md"===this.mode&&e("ion-ripple-effect",null))))}renderRadio(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":t,"aria-activedescendant":this.activeId},s.map(t=>e("button",{type:"button",onClick:()=>this.rbClick(t),"aria-checked":t.checked?"true":null,disabled:t.disabled,id:t.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio",role:"radio"},e("div",{class:"alert-button-inner"},e("div",{class:"alert-radio-icon"},e("div",{class:"alert-radio-inner"})),e("div",{class:"alert-radio-label"},t.label)),"md"===this.mode&&e("ion-ripple-effect",null))))}renderInput(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-input-group","aria-labelledby":t},s.map(t=>e("div",{class:"alert-input-wrapper"},e("input",{placeholder:t.placeholder,value:t.value,type:t.type,min:t.min,max:t.max,onInput:e=>t.value=e.target.value,id:t.id,disabled:t.disabled,tabIndex:0,class:"alert-input"}))))}hostData(){return{role:"alertdialog",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},i(this.cssClass),{"alert-translucent":this.translucent})}}renderAlertButtons(){const t=this.processedButtons,s={"alert-button-group":!0,"alert-button-group-vertical":t.length>2};return e("div",{class:s},t.map(t=>e("button",{type:"button","ion-activable":!0,class:function(e){return Object.assign({"alert-button":!0},i(e.cssClass))}(t),tabIndex:0,onClick:()=>this.buttonClick(t)},e("span",{class:"alert-button-inner"},t.text))))}render(){const t=`alert-${this.overlayIndex}-hdr`,s=`alert-${this.overlayIndex}-sub-hdr`,a=`alert-${this.overlayIndex}-msg`;let n;return this.header?n=t:this.subHeader&&(n=s),[e("ion-backdrop",{tappable:this.backdropDismiss}),e("div",{class:"alert-wrapper"},e("div",{class:"alert-head"},this.header&&e("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&e("h2",{id:s,class:"alert-sub-title"},this.subHeader)),e("div",{id:a,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(n),this.renderAlertButtons())]}static get is(){return"ion-alert"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons",watchCallbacks:["buttonsChanged"]},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionAlertDidLoad",method:"ionAlertDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidUnload",method:"ionAlertDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]}static get style(){return".sc-ion-alert-ios-h{--min-width:250px;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:var(--min-width);max-width:var(--max-width);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin:0;padding:0}.alert-sub-title.sc-ion-alert-ios{margin:5px 0 0;padding:0;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain;max-height:240px}.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;line-height:20px;z-index:0}.alert-button-inner.sc-ion-alert-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-tappable.sc-ion-alert-ios{margin:0;padding:0;width:100%;border:0;background:0 0;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-webkit-box;display:-ms-flexbox;display:flex;height:44px;contain:strict}.alert-button.sc-ion-alert-ios:active, .alert-button.sc-ion-alert-ios:focus, .alert-checkbox.sc-ion-alert-ios:active, .alert-checkbox.sc-ion-alert-ios:focus, .alert-input.sc-ion-alert-ios:active, .alert-input.sc-ion-alert-ios:focus, .alert-radio.sc-ion-alert-ios:active, .alert-radio.sc-ion-alert-ios:focus{outline:0}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, #f9f9f9);--max-width:270px;font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-translucent.sc-ion-alert-ios-h   .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.alert-head.sc-ion-alert-ios{padding:12px 16px 7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-text-color-step-400,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding:0 16px 21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}.alert-message.sc-ion-alert-ios:empty{padding:0 0 12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding:6px;border:.55px solid var(--ion-background-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:scroll;-webkit-overflow-scrolling:touch}.alert-radio-label.sc-ion-alert-ios{padding:13px;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[aria-checked=true].sc-ion-alert-ios   .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 2px 2px 0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}.alert-checkbox-label.sc-ion-alert-ios{padding:13px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin:10px 6px 10px 16px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,#c8c7cc);background-color:var(--ion-item-background-color,var(--ion-background-color,#fff));contain:strict}[aria-checked=true].sc-ion-alert-ios   .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 1px 1px 0;border-style:solid;border-color:var(--ion-background-color,#fff)}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button.sc-ion-alert-ios{margin:0;border-radius:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}.alert-button.activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"}static get styleMode(){return"ios"}}export{u as IonAlert};