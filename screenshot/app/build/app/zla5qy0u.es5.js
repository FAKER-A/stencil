/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,l)}s((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};App.loadBundle("zla5qy0u",["exports","./chunk-db26e7ab.js","./chunk-db50cf96.js"],function(e,t,n){var r=window.App.h;function o(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var o=new e;o.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.01,.3),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1);var a=n.addElement(t).easing("ease-in-out").duration(200).add(r).add(o);return Promise.resolve(a)}function a(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var o=new e;o.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.3,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9);var a=n.addElement(t).easing("ease-in-out").duration(200).add(r).add(o);return Promise.resolve(a)}function i(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var o=new e;return o.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.01,.5),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(n.addElement(t).easing("ease-in-out").duration(200).add(r).add(o))}function l(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var o=new e;return o.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.5,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(n.addElement(t).easing("ease-in-out").duration(200).add(r).add(o))}var s=function(){function e(){this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}return e.prototype.buttonsChanged=function(){var e=this.buttons;this.processedButtons=e.map(function(e){return"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e}).filter(function(e){return null!=e})},e.prototype.inputsChanged=function(){var e=this,t=this.inputs,n=new Set(t.map(function(e){return e.type}));n.has("checkbox")&&n.has("radio")&&console.warn("Alert cannot mix input types: "+Array.from(n.values()).join("/")+". Please see alert docs for more info."),this.inputType=n.values().next().value,this.processedInputs=t.map(function(t,n){return{type:t.type||"text",name:t.name?t.name:n+"",placeholder:t.placeholder?t.placeholder:"",value:t.value?t.value:"",label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id?t.id:"alert-input-"+e.overlayIndex+"-"+n,handler:t.handler,min:t.min,max:t.max}})},e.prototype.componentWillLoad=function(){this.inputsChanged(),this.buttonsChanged()},e.prototype.componentDidLoad=function(){this.ionAlertDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionAlertDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(null,t.BACKDROP)},e.prototype.dispatchCancelHandler=function(e){var n=e.detail.role;if(t.isCancel(n)){var r=this.processedButtons.find(function(e){return"cancel"===e.role});this.callButtonHandler(r)}},e.prototype.present=function(){return t.present(this,"alertEnter",o,i)},e.prototype.dismiss=function(e,n){return t.dismiss(this,e,n,"alertLeave",a,l)},e.prototype.onDidDismiss=function(){return t.eventMethod(this.el,"ionAlertDidDismiss")},e.prototype.onWillDismiss=function(){return t.eventMethod(this.el,"ionAlertWillDismiss")},e.prototype.rbClick=function(e){for(var t=0,n=this.processedInputs;t<n.length;t++){var r=n[t];r.checked=r===e}this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.cbClick=function(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.buttonClick=function(e){var n=e.role,r=this.getValues();if(t.isCancel(n))this.dismiss({values:r},n);else{var o=this.callButtonHandler(e,r);!1!==o&&this.dismiss(Object.assign({values:r},o),e.role)}},e.prototype.callButtonHandler=function(e,t){if(e&&e.handler){var n=e.handler(t);if(!1===n)return!1;if("object"==typeof n)return n}return{}},e.prototype.getValues=function(){if(0!==this.processedInputs.length){if("radio"===this.inputType){var e=this.processedInputs.find(function(e){return!0===e.checked});return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value});var t={};return this.processedInputs.forEach(function(e){t[e.name]=e.value||""}),t}},e.prototype.renderAlertInputs=function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}},e.prototype.renderCheckbox=function(e){var t=this,n=this.processedInputs;return 0===n.length?null:r("div",{class:"alert-checkbox-group","aria-labelledby":e},n.map(function(e){return r("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":e.checked?"true":null,id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button"},r("div",{class:"alert-button-inner"},r("div",{class:"alert-checkbox-icon"},r("div",{class:"alert-checkbox-inner"})),r("div",{class:"alert-checkbox-label"},e.label)),"md"===t.mode&&r("ion-ripple-effect",null))}))},e.prototype.renderRadio=function(e){var t=this,n=this.processedInputs;return 0===n.length?null:r("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},n.map(function(e){return r("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":e.checked?"true":null,disabled:e.disabled,id:e.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio",role:"radio"},r("div",{class:"alert-button-inner"},r("div",{class:"alert-radio-icon"},r("div",{class:"alert-radio-inner"})),r("div",{class:"alert-radio-label"},e.label)),"md"===t.mode&&r("ion-ripple-effect",null))}))},e.prototype.renderInput=function(e){var t=this.processedInputs;return 0===t.length?null:r("div",{class:"alert-input-group","aria-labelledby":e},t.map(function(e){return r("div",{class:"alert-input-wrapper"},r("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:"alert-input"}))}))},e.prototype.hostData=function(){return{role:"alertdialog",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},n.getClassMap(this.cssClass),{"alert-translucent":this.translucent})}},e.prototype.renderAlertButtons=function(){var e=this,t=this.processedButtons,o={"alert-button-group":!0,"alert-button-group-vertical":t.length>2};return r("div",{class:o},t.map(function(t){return r("button",{type:"button","ion-activable":!0,class:function(e){return Object.assign({"alert-button":!0},n.getClassMap(e.cssClass))}(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},r("span",{class:"alert-button-inner"},t.text))}))},e.prototype.render=function(){var e,t="alert-"+this.overlayIndex+"-hdr",n="alert-"+this.overlayIndex+"-sub-hdr",o="alert-"+this.overlayIndex+"-msg";return this.header?e=t:this.subHeader&&(e=n),[r("ion-backdrop",{tappable:this.backdropDismiss}),r("div",{class:"alert-wrapper"},r("div",{class:"alert-head"},this.header&&r("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&r("h2",{id:n,class:"alert-sub-title"},this.subHeader)),r("div",{id:o,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(e),this.renderAlertButtons())]},Object.defineProperty(e,"is",{get:function(){return"ion-alert"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons",watchCallbacks:["buttonsChanged"]},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionAlertDidLoad",method:"ionAlertDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidUnload",method:"ionAlertDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--min-width:250px;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}:host(.alert-top){padding-top:50px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.alert-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:var(--min-width);max-width:var(--max-width);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title{margin:0;padding:0}.alert-sub-title{margin:5px 0 0;padding:0;font-weight:400}.alert-message{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain;max-height:240px}.alert-message::-webkit-scrollbar{display:none}.alert-input{width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button{display:block;border:0;line-height:20px;z-index:0}.alert-button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-tappable{margin:0;padding:0;width:100%;border:0;background:0 0;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-webkit-box;display:-ms-flexbox;display:flex;height:44px;contain:strict}.alert-button:active,.alert-button:focus,.alert-checkbox:active,.alert-checkbox:focus,.alert-input:active,.alert-input:focus,.alert-radio:active,.alert-radio:focus{outline:0}.alert-checkbox-icon,.alert-checkbox-inner,.alert-radio-icon{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--background:var(--ion-overlay-background-color, #f9f9f9);--max-width:270px;font-size:14px}.alert-wrapper{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}:host(.alert-translucent) .alert-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.alert-head{padding:12px 16px 7px;text-align:center}.alert-title{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title{color:var(--ion-text-color-step-400,#666);font-size:14px}.alert-input-group,.alert-message{padding:0 16px 21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}.alert-message:empty{padding:0 0 12px}.alert-input{border-radius:4px;margin-top:10px;padding:6px;border:.55px solid var(--ion-background-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-input::-webkit-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input:-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input::-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input::placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-checkbox-group,.alert-radio-group{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:scroll;-webkit-overflow-scrolling:touch}.alert-radio-label{padding:13px;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[aria-checked=true] .alert-radio-label{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon{position:relative;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true] .alert-radio-inner{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 2px 2px 0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}.alert-checkbox-label{padding:13px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon{border-radius:50%;margin:10px 6px 10px 16px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,#c8c7cc);background-color:var(--ion-item-background-color,var(--ion-background-color,#fff));contain:strict}[aria-checked=true] .alert-checkbox-icon{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true] .alert-checkbox-inner{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 1px 1px 0;border-style:solid;border-color:var(--ion-background-color,#fff)}.alert-button-group{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button{margin:0;border-radius:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}.alert-button:last-child{border-right:0;font-weight:700}.alert-button.activated{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),c=function(){function e(){}return e.prototype.onClick=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){return t=this.el.closest("ion-nav"),e.preventDefault(),t&&t.canGoBack()?t.pop({skipIfBusy:!0}):this.defaultHref&&n.openURL(this.win,this.defaultHref,e,"back"),[2]})})},e.prototype.hostData=function(){var e=!!this.defaultHref;return{class:Object.assign({},n.createColorClasses(this.color),{button:!0,"show-back-button":e}),"ion-activable":!0}},e.prototype.render=function(){var e=this,t=this.icon||this.config.get("backButtonIcon","arrow-back"),n=null!=this.text?this.text:this.config.get("backButtonText","Back");return r("button",{type:"button",class:"back-button-native",onClick:function(t){return e.onClick(t)}},r("span",{class:"back-button-inner"},t&&r("ion-icon",{icon:t,lazy:!1}),"ios"===this.mode&&n&&r("span",{class:"button-text"},n),"md"===this.mode&&r("ion-ripple-effect",null)))},Object.defineProperty(e,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.show-back-button),:host-context(.can-go-back>ion-header){display:block}.back-button-native{font-family:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;margin:0;min-height:32px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background-color:transparent;font-size:17px;line-height:1;overflow:visible;z-index:99}.back-button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.activated{opacity:.4}ion-icon{padding:0;margin:0 -5px 0 -4px;display:inherit;font-size:1.85em;pointer-events:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),u=function(){function e(){}return Object.defineProperty(e,"is",{get:function(){return"ion-buttons"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99;pointer-events:none}::slotted(*) .button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--box-shadow:none;margin-left:2px;margin-right:2px;pointer-events:auto;--padding-top:0;--pading-bottom:0;--padding-start:5px;--padding-end:5px;--height:32px;font-size:17px;font-weight:400}::slotted(*) .button:not(.button-round){--border-radius:4px}:host-context(.ion-color)::slotted(*) .button{--ion-color-base:currentColor}::slotted(*) ion-icon[slot=start]{margin:0 .3em 0 0;font-size:24px;line-height:.67;pointer-events:none}::slotted(*) ion-icon[slot=end]{margin:0 0 0 .4em;font-size:24px;line-height:.67;pointer-events:none}::slotted(*) ion-icon[slot=icon-only]{padding:0;margin:0;font-size:31px;line-height:.67;pointer-events:none}::slotted(*) .button.button-clear{--height:35px}::slotted(*) .button.button-solid-ios:hover{opacity:.4}:host([slot=start]){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}:host([slot=secondary]){-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}:host([slot=primary]){-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;text-align:end}:host([slot=end]){-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;text-align:end}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();e.IonAlert=s,e.IonBackButton=c,e.IonButtons=u,Object.defineProperty(e,"__esModule",{value:!0})});