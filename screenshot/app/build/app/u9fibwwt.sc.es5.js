/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,c)}a((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};App.loadBundle("u9fibwwt",["exports","./chunk-db50cf96.js"],function(e,t){var n=window.App.h,r=function(){function e(){}return e.prototype.onClick=function(e){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(r){return n=this.el.closest("ion-nav"),e.preventDefault(),n&&n.canGoBack()?n.pop({skipIfBusy:!0}):this.defaultHref&&t.openURL(this.win,this.defaultHref,e,"back"),[2]})})},e.prototype.hostData=function(){var e=!!this.defaultHref;return{class:Object.assign({},t.createColorClasses(this.color),{button:!0,"show-back-button":e}),"ion-activable":!0}},e.prototype.render=function(){var e=this,t=this.icon||this.config.get("backButtonIcon","arrow-back"),r=null!=this.text?this.text:this.config.get("backButtonText","Back");return n("button",{type:"button",class:"back-button-native",onClick:function(t){return e.onClick(t)}},n("span",{class:"back-button-inner"},t&&n("ion-icon",{icon:t,lazy:!1}),"ios"===this.mode&&r&&n("span",{class:"button-text"},r),"md"===this.mode&&n("ion-ripple-effect",null)))},Object.defineProperty(e,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-back-button-ios-h{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:var(--ion-color-primary, #3880ff)}.show-back-button.sc-ion-back-button-ios-h, .can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header   .sc-ion-back-button-ios-h{display:block}.back-button-native.sc-ion-back-button-ios{font-family:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;margin:0;min-height:32px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background-color:transparent;font-size:17px;line-height:1;overflow:visible;z-index:99}.back-button-inner.sc-ion-back-button-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text.sc-ion-back-button-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.activated.sc-ion-back-button-ios{opacity:.4}ion-icon.sc-ion-back-button-ios{padding:0;margin:0 -5px 0 -4px;display:inherit;font-size:1.85em;pointer-events:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){}return Object.defineProperty(e,"is",{get:function(){return"ion-buttons"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-buttons-ios-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99;pointer-events:none}.sc-ion-buttons-ios-s  .button {--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--box-shadow:none;margin-left:2px;margin-right:2px;pointer-events:auto;--padding-top:0;--pading-bottom:0;--padding-start:5px;--padding-end:5px;--height:32px;font-size:17px;font-weight:400}.sc-ion-buttons-ios-s  .button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--ion-color-base:currentColor}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin:0 .3em 0 0;font-size:24px;line-height:.67;pointer-events:none}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin:0 0 0 .4em;font-size:24px;line-height:.67;pointer-events:none}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding:0;margin:0;font-size:31px;line-height:.67;pointer-events:none}.sc-ion-buttons-ios-s  .button.button-clear {--height:35px}.sc-ion-buttons-ios-s  .button.button-solid-ios:hover {opacity:.4}[slot=start].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[slot=secondary].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}[slot=primary].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;text-align:end}[slot=end].sc-ion-buttons-ios-h{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;text-align:end}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();e.IonBackButton=r,e.IonButtons=o,Object.defineProperty(e,"__esModule",{value:!0})});