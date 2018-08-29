/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{b as e,c as i,d as n,e as s}from"./chunk-9cb229af.js";import{c as o,b as r,e as a}from"./chunk-f7b6af08.js";class l{constructor(){this.lastClick=-1e4,this.visible=!0,this.tappable=!0,this.stopPropagation=!0}componentDidLoad(){var t;t=this.doc,h.add(this),t.body.classList.add(c)}componentDidUnload(){var t;t=this.doc,h.delete(this),0===h.size&&t.body.classList.remove(c)}onTouchStart(t){this.lastClick=e(t),this.emitTap(t)}onMouseDown(t){this.lastClick<e(t)-2500&&this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}hostData(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}}static get is(){return"ion-backdrop"}static get encapsulation(){return"shadow"}static get properties(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}}static get events(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]}static get style(){return".sc-ion-backdrop-ios-h{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2;background-color:var(--ion-backdrop-color,#000)}.backdrop-hide.sc-ion-backdrop-ios-h{background:0 0}.backdrop-no-tappable.sc-ion-backdrop-ios-h{cursor:auto}body.backdrop-no-scroll.sc-ion-backdrop-ios{overflow:hidden}"}static get styleMode(){return"ios"}}const c="backdrop-no-scroll",h=new Set;class d{constructor(){this.keyFocus=!1,this.buttonType="button",this.disabled=!1,this.strong=!1,this.type="button"}componentWillLoad(){void 0===this.fill&&(this.fill=this.el.closest("ion-buttons")?"clear":"solid")}onFocus(){this.ionFocus.emit()}onKeyUp(){this.keyFocus=!0}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}onClick(t){if("button"===this.type)o(this.win,this.href,t,this.routerDirection);else if(i(this.el)){const e=this.el.closest("form");if(e){t.preventDefault(),t.stopPropagation();const i=document.createElement("button");i.type=this.type,i.style.display="none",e.appendChild(i),i.click(),i.remove()}}}hostData(){const{buttonType:t,color:e,expand:i,fill:n,mode:s,shape:o,size:r,strong:a}=this;return{class:Object.assign({},function(t,e){return t?{[t]:!0,[`${t}-${e}`]:!0}:{}}(t,s),u(t,i,s),u(t,r,s),u(t,o,s),u(t,a?"strong":void 0,s),function(t,e,i,n){let s=t;i&&(s+=`-${i.toLowerCase()}`);const o={[s]:!0,[`${s}-${n}`]:!0};return e&&(o[`ion-color-${e}`]=!0),o}(t,e,n,s),{focused:this.keyFocus}),"ion-activable":!0}}render(){const e=this.href?"a":"button",i="button"===e?{type:this.type}:{href:this.href};return t(e,Object.assign({},i,{class:"button-native",disabled:this.disabled,onFocus:this.onFocus.bind(this),onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this),onClick:this.onClick.bind(this)}),t("span",{class:"button-inner"},t("slot",{name:"icon-only"}),t("slot",{name:"start"}),t("slot",null),t("slot",{name:"end"})),"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-button"}static get encapsulation(){return"shadow"}static get properties(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},keyFocus:{state:!0},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}}static get events(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-button-ios-h{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);--ion-color-shade:var(--ion-color-primary-shade, #3171e0);--overflow:hidden;--ripple-color:currentColor;display:inline-block;font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}[disabled].sc-ion-button-ios-h{pointer-events:none}.button-solid.sc-ion-button-ios-h{--background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-outline.sc-ion-button-ios-h{--border-color:var(--ion-color-base);--background:transparent;color:var(--ion-color-base);--border-radius:12px;--border-width:1px;--border-style:solid}.button-clear.sc-ion-button-ios-h{--border-width:0;--background:transparent;color:var(--ion-color-base)}.button-block.sc-ion-button-ios-h{display:block}.button-block.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:strict}.button-block.sc-ion-button-ios-h   .button-native.sc-ion-button-ios::after{clear:both}.button-full.sc-ion-button-ios-h{display:block}.button-full.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{margin-left:0;margin-right:0;display:block;width:100%;contain:strict}.button-full.sc-ion-button-ios-h:not(.button-round)   .button-native.sc-ion-button-ios{border-radius:0;border-right-width:0;border-left-width:0}.button-native.sc-ion-button-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled].sc-ion-button-ios{cursor:default;opacity:.5;pointer-events:none}.button-inner.sc-ion-button-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.sc-ion-button-ios-s > ion-icon{font-size:1.4em;pointer-events:none}.sc-ion-button-ios-s > ion-icon[slot=start]{margin:0 .3em 0 -.3em}.sc-ion-button-ios-s > ion-icon[slot=end]{margin:0 -.2em 0 .3em}.sc-ion-button-ios-s > ion-icon[slot=icon-only]{font-size:1.8em}ion-ripple-effect.sc-ion-button-ios{color:var(--ripple-color)}.sc-ion-button-ios-h{--border-radius:12px;--margin-top:4px;--margin-bottom:4px;--margin-start:2px;--margin-end:2px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--height:2.8em;--transition:background-color,opacity 100ms linear;font-size:16px;font-weight:500;letter-spacing:-.03em}.button-solid.sc-ion-button-ios-h:hover{--opacity:0.8}.button-solid.focused.sc-ion-button-ios-h{--background:var(--ion-color-shade)}.button-solid.activated.sc-ion-button-ios-h{--background:var(--ion-color-shade);--opacity:1}.button-outline.activated.sc-ion-button-ios-h{--background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-outline.focused.sc-ion-button-ios-h{--background:rgba(var(--ion-color-base-rgb), 0.1)}.button-outline.activated.focused.sc-ion-button-ios-h{--border-color:var(--ion-color-shade);--background:var(--ion-color-shade)}.button-clear.sc-ion-button-ios-h:hover{--opacity:0.6}.button-clear.activated.sc-ion-button-ios-h{--opacity:0.4}.button-clear.focused.sc-ion-button-ios-h{--background:rgba(var(--ion-color-base-rgb), 0.1)}.button-round.sc-ion-button-ios-h{--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}.button-large.sc-ion-button-ios-h{--border-radius:14px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;--height:2.8em;font-size:20px}.button-small.sc-ion-button-ios-h{--border-radius:8px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.1em;font-size:13px}.button-strong.sc-ion-button-ios-h{font-weight:600}"}static get styleMode(){return"ios"}}function u(t,e,i){return e?{[`${t}-${e=e.toLocaleLowerCase()}`]:!0,[`${t}-${e}-${i}`]:!0}:{}}const p=()=>import("./ios.transition.js"),m=()=>import("./md.transition.js");async function g(t){const e=t.enteringEl,i=t.leavingEl;e&&e.classList.remove("ion-page-invisible"),i&&i.classList.remove("ion-page-invisible")}async function v(t,e){const i=(null!=t.deepWait?t.deepWait:e)?[k(t.enteringEl),k(t.leavingEl)]:[f(t.enteringEl),f(t.leavingEl)];await Promise.all(i),await async function(t,e){t&&await t(e)}(t.viewIsReady,t.enteringEl)}function b(t,e,i){y(t,i,"ionViewWillLeave"),y(t,e,"ionViewWillEnter")}function w(t,e,i){y(t,e,"ionViewDidEnter"),y(t,i,"ionViewDidLeave")}function y(t,e,i){if(e){const n=new(0,t.CustomEvent)(i,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}}function f(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}async function k(t){const e=t;if(e){if(e.componentOnReady&&await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(k))}}function C(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}class S{constructor(t,e){this.component=t,this.params=e,this.state=1}async init(t){if(this.state=2,!this.element){const e=this.component;this.element=await async function(t,e,i,n,s){if(t)return t.attachViewToDom(e,i,s,n);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof i?e.ownerDocument.createElement(i):i;return n&&n.forEach(t=>o.classList.add(t)),s&&Object.assign(o,s),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o}(this.delegate,t,e,["ion-page","ion-page-invisible"],this.params)}}_destroy(){this.state;const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}function T(t,e,i){if(!t)return!1;if(t.component!==e)return!1;const n=t.params,s=null==n,o=null==i;if(n===i)return!0;if(s!==o)return!1;if(s&&o)return!0;const r=Object.keys(n),a=Object.keys(i);if(r.length!==a.length)return!1;for(const t of r)if(n[t]!==i[t])return!1;return!0}function E(t,e){return t?t instanceof S?t:new S(t,e):null}class V{constructor(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!this.swipeGesture)}rootChanged(){this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await import("./gesture.js")).createGesture({el:this.win.document.body,queue:this.queue,gestureName:"goback-swipe",gesturePriority:30,threshold:10,canStart:this.canStart.bind(this),onStart:this.onStart.bind(this),onMove:this.onMove.bind(this),onEnd:this.onEnd.bind(this)}),this.swipeGestureChanged()}componentDidUnload(){for(const t of this.views)y(this.win,t.element,"ionViewWillUnload"),t._destroy();this.gesture&&this.gesture.destroy(),this.sbTrns&&this.sbTrns.destroy(),this.transInstr.length=this.views.length=0,this.sbTrns=void 0,this.destroyed=!0}push(t,e,i,n){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:e}],opts:i},n)}insert(t,e,i,n,s){return this.queueTrns({insertStart:t,insertViews:[{page:e,params:i}],opts:n},s)}insertPages(t,e,i,n){return this.queueTrns({insertStart:t,insertViews:e,opts:i},n)}pop(t,e){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},e)}popTo(t,e,i){const n={removeStart:-1,removeCount:-1,opts:e};return"object"==typeof t&&t.component?(n.removeView=t,n.removeStart=1):"number"==typeof t&&(n.removeStart=t+1),this.queueTrns(n,i)}popToRoot(t,e){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},e)}removeIndex(t,e=1,i,n){return this.queueTrns({removeStart:t,removeCount:e,opts:i},n)}setRoot(t,e,i,n){return this.setPages([{page:t,params:e}],i,n)}setPages(t,e,i){return e||(e={}),!0!==e.animated&&(e.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:e},i)}setRouteId(t,e,i){const n=this.getActive();if(T(n,t,e))return Promise.resolve({changed:!1,element:n.element});let s;const o=new Promise(t=>s=t);let r;const a={updateURL:!1,viewIsReady:t=>{let e;const i=new Promise(t=>e=t);return s({changed:!0,element:t,markVisible:async()=>{e(),await r}}),i}};if(0===i)r=this.setRoot(t,e,a);else{const n=this.views.find(i=>T(i,t,e));n?r=this.popTo(n,Object.assign({},a,{direction:"back"})):1===i?r=this.push(t,e,a):-1===i&&(r=this.setRoot(t,e,Object.assign({},a,{direction:"back",animated:!0})))}return o}getRouteId(){const t=this.getActive();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}canGoBack(t=this.getActive()){return!(!t||!this.getPrevious(t))}getActive(){return this.views[this.views.length-1]}getByIndex(t){return this.views[t]}getPrevious(t=this.getActive()){if(!t)return;const e=this.views,i=e.indexOf(t);return i>0?e[i-1]:void 0}isAnimating(){return this.isTransitioning}getLength(){return this.views.length}queueTrns(t,e){const i=new Promise((e,i)=>{t.resolve=e,t.reject=i});return t.done=e,t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),i}success(t,e){if(null!==this.transInstr){if(e.done&&e.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),e.resolve(t.hasCompleted),!1!==e.opts.updateURL&&this.useRouter){const e=this.win.document.querySelector("ion-router");if(e){const i="back"===t.direction?-1:1;e.navChanged(i)}}}else this.fireError("nav controller was destroyed",e)}failed(t,e){null!==this.transInstr?(this.transInstr.length=0,this.fireError(t,e)):this.fireError("nav controller was destroyed",e)}fireError(t,e){e.done&&e.done(!1,!1,t),e.reject&&!this.destroyed?e.reject(t):e.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const e=this.getActive(),i=this.getEnteringView(t,e);if(!e&&!i)throw new Error("no views in the stack to be removed");i&&1===i.state&&await i.init(this.el),this.postViewInit(i,e,t);const n=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&i!==e?await this.transition(i,e,t):{hasCompleted:!0,requiresTransition:!1};this.success(n,t),this.ionNavDidChange.emit()}catch(e){this.failed(e,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const e=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),null!=t.removeView){t.removeStart,t.removeCount;const e=this.views.indexOf(t.removeView);if(e<0)throw new Error("removeView was not found");t.removeStart+=e}null!=t.removeStart&&(t.removeStart<0&&(t.removeStart=e-1),t.removeCount<0&&(t.removeCount=e-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===e),t.insertViews&&((t.insertStart<0||t.insertStart>e)&&(t.insertStart=e),t.enteringRequiresTransition=t.insertStart===e);const i=t.insertViews;if(!i)return;i.length;const n=i.map(t=>t instanceof S?t:"page"in t?E(t.page,t.params):E(t,void 0)).filter(t=>null!==t);if(0===n.length)throw new Error("invalid views to insert");for(const e of n){e.delegate=t.opts.delegate;const i=e.nav;if(i&&i!==this)throw new Error("inserted view was already inserted");if(3===e.state)throw new Error("inserted view was already destroyed")}t.insertViews=n}getEnteringView(t,e){const i=t.insertViews;if(i)return i[i.length-1];const n=t.removeStart;if(null!=n){const i=this.views,s=n+t.removeCount;for(let t=i.length-1;t>=0;t--){const o=i[t];if((t<n||t>=s)&&o!==e)return o}}}postViewInit(t,e,i){i.resolve,i.reject;const n=i.opts,s=i.insertViews,o=i.removeStart,r=i.removeCount;let a;if(null!=o&&null!=r){a=[];for(let i=0;i<r;i++){const n=this.views[i+o];n&&n!==t&&n!==e&&a.push(n)}n.direction=n.direction||"back"}if(0===this.views.length+(s?s.length:0)-(r||0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(s){let t=i.insertStart;for(const e of s)this.insertViewAt(e,t),t++;i.enteringRequiresTransition&&(n.direction=n.direction||"forward")}if(a&&a.length>0){for(const t of a)y(this.win,t.element,"ionViewWillLeave"),y(this.win,t.element,"ionViewDidLeave"),y(this.win,t.element,"ionViewWillUnload");for(const t of a)this.destroyView(t)}}async transition(t,e,i){this.sbTrns&&(this.sbTrns.destroy(),this.sbTrns=void 0);const n=i.opts,s=n.progressAnimation?t=>{this.sbTrns=t}:void 0,o=t.element,r=e&&e.element,a=this.animated&&this.config.getBoolean("animated",!0),l=Object.assign({mode:this.mode,showGoBack:this.canGoBack(t),animationCtrl:this.animationCtrl,queue:this.queue,window:this.win,baseEl:this.el,progressCallback:s,animated:a,enteringEl:o,leavingEl:r},n),{hasCompleted:c}=await function(t){return new Promise((e,i)=>{t.queue.write(()=>{!function(t){const e=t.enteringEl,i=t.leavingEl;(function(t,e,i){t&&(t.style.zIndex="back"===i?"99":"101"),e&&(e.style.zIndex="100")})(e,i,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),C(e,!1),i&&C(i,!1)}(t),async function(t){const e=await async function(t){if(t.leavingEl&&!1!==t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await p()).iosTransitionAnimation:(await m()).mdTransitionAnimation}(t);return e?async function(t,e){await v(e,!0);const i=await e.animationCtrl.create(t,e.baseEl,e);return b(e.window,e.enteringEl,e.leavingEl),await function(t,e){const i=e.progressCallback,n=new Promise(e=>t.onFinish(e));return i?(t.progressStart(),i(t)):t.play(),n}(i,e),i.hasCompleted&&w(e.window,e.enteringEl,e.leavingEl),{hasCompleted:i.hasCompleted,animation:i}}(e,t):async function(t){const e=t.enteringEl,i=t.leavingEl;return await v(t,!1),b(t.window,e,i),w(t.window,e,i),{hasCompleted:!0}}(t)}(t).then(i=>{i.animation&&i.animation.destroy(),g(t),e(i)},e=>{g(t),i(e)})})})}(l);return this.transitionFinish(c,t,e,n)}transitionFinish(t,e,i,n){const s=t?e:i;return s&&this.cleanup(s),{hasCompleted:t,requiresTransition:!0,enteringView:e,leavingView:i,direction:n.direction}}insertViewAt(t,e){const i=this.views,n=i.indexOf(t);n>-1?(t.nav,i.splice(e,0,i.splice(n,1)[0])):(t.nav,t.nav=this,i.splice(e,0,t))}removeView(t){2===t.state||t.state;const e=this.views,i=e.indexOf(t);i>=0&&e.splice(i,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const e=this.views,i=e.indexOf(t);for(let t=e.length-1;t>=0;t--){const n=e[t],s=n.element;t>i?(y(this.win,s,"ionViewWillUnload"),this.destroyView(n)):t<i&&C(s,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&this.canGoBack()}onStart(){this.isTransitioning||this.transInstr.length>0||this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){if(this.sbTrns){this.isTransitioning=!0;const e=t.deltaX/this.win.innerWidth;this.sbTrns.progressStep(e)}}onEnd(t){if(this.sbTrns){const e=t.deltaX,i=this.win.innerWidth,n=e/i,s=t.velocityX,o=i/2,r=s>=0&&(s>.2||t.deltaX>o),a=(r?1-n:n)*i;let l=0;if(a>5){const t=a/Math.abs(s);l=Math.min(t,300)}this.sbTrns.progressEnd(r,n,l)}}render(){return["ios"===this.mode&&t("div",{class:"nav-decor"}),t("slot",null)]}static get is(){return"ion-nav"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getLength:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},isAnimating:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-nav-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor.sc-ion-nav{display:none}.show-decor.sc-ion-nav-h   .nav-decor.sc-ion-nav{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"}}class I{constructor(){this.inputId=`ion-rb-${R++}`,this.keyFocus=!1,this.name=this.inputId,this.disabled=!1,this.checked=!1}componentWillLoad(){this.ionSelect=s(this.ionSelect),this.ionStyle=s(this.ionStyle),void 0===this.value&&(this.value=this.inputId),this.emitStyle()}componentDidLoad(){this.ionRadioDidLoad.emit(),this.nativeInput.checked=this.checked;const t=this.nativeInput.closest("ion-item");if(t){const e=t.querySelector("ion-label");e&&(e.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",e.id))}}componentDidUnload(){this.ionRadioDidUnload.emit()}colorChanged(){this.emitStyle()}checkedChanged(t){this.nativeInput.checked!==t&&(this.nativeInput.checked=t),t&&this.ionSelect.emit({checked:!0,value:this.value}),this.emitStyle()}disabledChanged(t){this.nativeInput.disabled=t,this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}onClick(){this.checkedChanged(!0)}onChange(){this.checked=!0,this.nativeInput.focus()}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}hostData(){return{class:Object.assign({},r(this.color),{"in-item":a(".item",this.el),interactive:!0,"radio-checked":this.checked,"radio-disabled":this.disabled,"radio-key":this.keyFocus})}}render(){return[t("div",{class:"radio-icon"},t("div",{class:"radio-inner"})),t("input",{type:"radio",onClick:this.onClick.bind(this),onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:t=>this.nativeInput=t})]}static get is(){return"ion-radio"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color",watchCallbacks:["colorChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value",mutable:!0}}}static get events(){return[{name:"ionRadioDidLoad",method:"ionRadioDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRadioDidUnload",method:"ionRadioDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-radio-ios-h{--ion-color-base:var(--ion-color-primary, #3880ff);display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--width:16px;--height:21px}.radio-disabled.sc-ion-radio-ios-h{pointer-events:none;opacity:.3}.radio-icon.sc-ion-radio-ios{display:block;position:relative;width:var(--width);height:var(--height);contain:layout size style}input.sc-ion-radio-ios{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.radio-icon.sc-ion-radio-ios, .radio-inner.sc-ion-radio-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.item-radio.item-ios.sc-ion-radio-ios   ion-label.sc-ion-radio-ios{margin-left:0}.radio-checked.sc-ion-radio-ios-h   .radio-inner.sc-ion-radio-ios{left:7px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 2px 2px 0;border-style:solid;border-color:var(--ion-color-base)}.radio-key.sc-ion-radio-ios-h   .radio-icon.sc-ion-radio-ios::after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}.in-item.sc-ion-radio-ios-h{margin:8px 11px 8px 8px;display:block;position:static}.in-item[slot=start].sc-ion-radio-ios-h{margin:8px 21px 8px 3px}"}static get styleMode(){return"ios"}}let R=0;export{l as IonBackdrop,d as IonButton,V as IonNav,I as IonRadio};