/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(r,i){function l(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new o(function(e){e(t.value)}).then(l,s)}c((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var o,n,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,n=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(t,l)}catch(t){i=[6,t],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};App.loadBundle("doo9afgq",["exports","./chunk-db50cf96.js","./chunk-abcf1658.js"],function(t,e,o){var n=window.App.h,r=function(){function t(){}return t.prototype.hostData=function(){return{class:e.createColorClasses(this.color)}},t.prototype.render=function(){var t=this;return n("a",{href:this.href,onClick:function(o){return e.openURL(t.win,t.href,o,t.routerDirection)}},n("slot",null))},Object.defineProperty(t,"is",{get:function(){return"ion-anchor"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},href:{type:String,attr:"href"},routerDirection:{type:String,attr:"router-direction"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-anchor-h{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}.ion-color.sc-ion-anchor-h{color:var(--ion-color-base)}a.sc-ion-anchor{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),t}(),i=function(){function t(){this.keyFocus=!1,this.buttonType="button",this.disabled=!1,this.strong=!1,this.type="button"}return t.prototype.componentWillLoad=function(){void 0===this.fill&&(this.fill=this.el.closest("ion-buttons")?"clear":"solid")},t.prototype.onFocus=function(){this.ionFocus.emit()},t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},t.prototype.onClick=function(t){if("button"===this.type)e.openURL(this.win,this.href,t,this.routerDirection);else if(o.hasShadowDom(this.el)){var n=this.el.closest("form");if(n){t.preventDefault(),t.stopPropagation();var r=document.createElement("button");r.type=this.type,r.style.display="none",n.appendChild(r),r.click(),r.remove()}}},t.prototype.hostData=function(){var t=this,e=t.buttonType,o=t.color,n=t.expand,r=t.fill,i=t.mode,s=t.shape,c=t.size,a=t.strong;return{class:Object.assign({},function(t,e){var o;return t?((o={})[t]=!0,o[t+"-"+e]=!0,o):{}}(e,i),l(e,n,i),l(e,c,i),l(e,s,i),l(e,a?"strong":void 0,i),function(t,e,o,n){var r,i=t;o&&(i+="-"+o.toLowerCase());var l=((r={})[i]=!0,r[i+"-"+n]=!0,r);return e&&(l["ion-color-"+e]=!0),l}(e,o,r,i),{focused:this.keyFocus}),"ion-activable":!0}},t.prototype.render=function(){var t=this.href?"a":"button",e="button"===t?{type:this.type}:{href:this.href};return n(t,Object.assign({},e,{class:"button-native",disabled:this.disabled,onFocus:this.onFocus.bind(this),onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this),onClick:this.onClick.bind(this)}),n("span",{class:"button-inner"},n("slot",{name:"icon-only"}),n("slot",{name:"start"}),n("slot",null),n("slot",{name:"end"})),"md"===this.mode&&n("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},keyFocus:{state:!0},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-button-md-h{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);--ion-color-shade:var(--ion-color-primary-shade, #3171e0);--overflow:hidden;--ripple-color:currentColor;display:inline-block;font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}[disabled].sc-ion-button-md-h{pointer-events:none}.button-solid.sc-ion-button-md-h{--background:var(--ion-color-base);color:var(--ion-color-contrast);--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.2),0 1px 5px 0 rgba(0, 0, 0, 0.12)}.button-outline.sc-ion-button-md-h{--border-color:var(--ion-color-base);--background:transparent;color:var(--ion-color-base);--border-width:1px;--border-style:solid;--box-shadow:none}.button-clear.sc-ion-button-md-h{--border-width:0;--background:transparent;color:var(--ion-color-base);--opacity:1}.button-block.sc-ion-button-md-h{display:block}.button-block.sc-ion-button-md-h   .button-native.sc-ion-button-md{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:strict}.button-block.sc-ion-button-md-h   .button-native.sc-ion-button-md::after{clear:both}.button-full.sc-ion-button-md-h{display:block}.button-full.sc-ion-button-md-h   .button-native.sc-ion-button-md{margin-left:0;margin-right:0;display:block;width:100%;contain:strict}.button-full.sc-ion-button-md-h:not(.button-round)   .button-native.sc-ion-button-md{border-radius:0;border-right-width:0;border-left-width:0}.button-native.sc-ion-button-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled].sc-ion-button-md{cursor:default;opacity:.5;pointer-events:none}.button-inner.sc-ion-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.sc-ion-button-md-s > ion-icon{font-size:1.4em;pointer-events:none}.sc-ion-button-md-s > ion-icon[slot=start]{margin:0 .3em 0 -.3em}.sc-ion-button-md-s > ion-icon[slot=end]{margin:0 -.2em 0 .3em}.sc-ion-button-md-s > ion-icon[slot=icon-only]{font-size:1.8em;padding:0}ion-ripple-effect.sc-ion-button-md{color:var(--ripple-color)}.sc-ion-button-md-h{--transition:box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),color 300ms cubic-bezier(0.4, 0, 0.2, 1);--border-radius:2px;--margin-top:4px;--margin-bottom:4px;--margin-start:2px;--margin-end:2px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--height:36px;font-size:14px;font-weight:500;letter-spacing:0;text-transform:uppercase}.button-solid.activated.sc-ion-button-md-h{--box-shadow:0 3px 5px rgba(0, 0, 0, 0.14),0 3px 5px rgba(0, 0, 0, 0.21);--background:var(--ion-color-shade)}.button-outline.activated.sc-ion-button-md-h{--background:transparent}.button-outline.focused.sc-ion-button-md-h{--background:rgba(var(--ion-color-base-rgb), 0.1)}.button-round.sc-ion-button-md-h{--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}.button-large.sc-ion-button-md-h{--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;--height:2.8em;font-size:20px}.button-small.sc-ion-button-md-h{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.1em;font-size:13px}.button-strong.sc-ion-button-md-h{font-weight:700}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function l(t,e,o){var n;return e?((n={})[t+"-"+(e=e.toLocaleLowerCase())]=!0,n[t+"-"+e+"-"+o]=!0,n):{}}var s=function(){function t(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}return t.prototype.onNavChanged=function(){this.resize()},t.prototype.componentWillLoad=function(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&"ontouchstart"in this.win)},t.prototype.componentDidLoad=function(){this.resize()},t.prototype.componentDidUnload=function(){this.watchDog&&clearInterval(this.watchDog)},t.prototype.resize=function(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},t.prototype.readDimensions=function(){var t=function(t){var e=t.closest("ion-tabs");if(e)return e;var o=t.closest("ion-app,ion-page,.ion-page,page-inner");return o||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())},t.prototype.onScroll=function(t){var e=this,o=Date.now(),n=!this.isScrolling;this.lastScroll=o,n&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(function(o){e.queued=!1,e.detail.event=t,function(t,e,o,n){var r=t.currentX,i=t.currentY,l=t.timeStamp,s=e.scrollLeft,c=e.scrollTop;n&&(t.startTimeStamp=o,t.startX=s,t.startY=c,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=s,t.currentY=t.scrollTop=c,t.deltaX=s-t.startX,t.deltaY=c-t.startY;var a=o-l;if(a>0&&a<100){var u=(s-r)/a,f=(c-i)/a;t.velocityX=.7*u+.3*t.velocityX,t.velocityY=.7*f+.3*t.velocityY}}(e.detail,e.scrollEl,o,n),e.ionScroll.emit(e.detail)}))},t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)},t.prototype.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},t.prototype.scrollToBottom=function(t){void 0===t&&(t=0);var e=this.scrollEl.scrollHeight-this.scrollEl.clientHeight;return this.scrollToPoint(void 0,e,t)},t.prototype.scrollByPoint=function(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)},t.prototype.scrollToPoint=function(t,e,o){return void 0===o&&(o=0),__awaiter(this,void 0,void 0,function(){var n,r,i,l,s,c,a,u,f;return __generator(this,function(p){return n=this.scrollEl,o<32?(null!=e&&(n.scrollTop=e),null!=t&&(n.scrollLeft=t),[2]):(i=0,l=new Promise(function(t){return r=t}),s=n.scrollTop,c=n.scrollLeft,a=null!=e?e-s:0,u=null!=t?t-c:0,f=function(t){var e=Math.min(1,(t-i)/o)-1,l=Math.pow(e,3)+1;0!==a&&(n.scrollTop=Math.floor(l*a+s)),0!==u&&(n.scrollLeft=Math.floor(l*u+c)),l<1?requestAnimationFrame(f):r()},requestAnimationFrame(function(t){i=t,f(t)}),[2,l])})})},t.prototype.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()},100)},t.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})},t.prototype.hostData=function(){return{class:Object.assign({},e.createColorClasses(this.color),{overscroll:this.forceOverscroll}),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}}},t.prototype.render=function(){var t=this,e=this.scrollX,o=this.scrollY,r=this.forceOverscroll;return this.resize(),[n("div",{class:{"inner-scroll":!0,"scroll-x":e,"scroll-y":o,overscroll:(e||o)&&!!r},ref:function(e){return t.scrollEl=e},onScroll:function(e){return t.onScroll(e)}},n("slot",null)),n("slot",{name:"fixed"})]},Object.defineProperty(t,"is",{get:function(){return"ion-content"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-content-h{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0!important;margin:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);contain:layout size style}.ion-color.sc-ion-content-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.outer-content.sc-ion-content-h{--background:var(--ion-background-color-step-50, #f2f2f2)}.inner-scroll.sc-ion-content{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.scroll-x.sc-ion-content, .scroll-y.sc-ion-content{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y.sc-ion-content{overflow-y:auto}.scroll-x.sc-ion-content{overflow-x:auto}.overscroll.sc-ion-content::after, .overscroll.sc-ion-content::before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-content::before{bottom:-1px}.overscroll.sc-ion-content::after{top:-1px}"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.isVisible=!1,this.lazy=!1}return t.prototype.componentWillLoad=function(){var t=this;this.waitUntilVisible(this.el,"50px",function(){t.isVisible=!0,t.loadIcon()})},t.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.waitUntilVisible=function(t,e,o){var n=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var r=this.io=new this.win.IntersectionObserver(function(t){t[0].isIntersecting&&(r.disconnect(),n.io=void 0,o())},{rootMargin:e});r.observe(t)}else o()},t.prototype.loadIcon=function(){var t=this;if(!this.isServer&&this.isVisible){var e=this.getUrl();e&&function(t){var e=a.get(t);return e||(e=fetch(t,{cache:"force-cache"}).then(function(t){return t.ok?t.text():Promise.resolve(null)}),a.set(t,e)),e}(e).then(function(e){t.svgContent=function(t,e,o){if(e){var n=t.createDocumentFragment(),r=t.createElement("div");r.innerHTML=e,n.appendChild(r);for(var i=r.childNodes.length-1;i>=0;i--)"svg"!==r.childNodes[i].nodeName.toLowerCase()&&r.removeChild(r.childNodes[i]);var l=r.firstElementChild;if(l&&"svg"===l.nodeName.toLowerCase()&&(o&&l.setAttribute("class",o),function t(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var o=0;o<e.attributes.length;o++){var n=e.attributes[o].value;if("string"==typeof n&&0===n.toLowerCase().indexOf("on"))return!1}for(o=0;o<e.childNodes.length;o++)if(!t(e.childNodes[o]))return!1}return!0}(l)))return r.innerHTML}return""}(t.doc,e,t.el["s-sc"])})}if(!this.ariaLabel){var o=u(this.name,this.mode,this.ios,this.md);o&&(this.ariaLabel=o.replace("ios-","").replace("md-","").replace(/\-/g," "))}},t.prototype.getUrl=function(){var t=f(this.src);return t||((t=u(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=f(this.icon))?t:(t=u(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)},t.prototype.getNamedUrl=function(t){return this.resourcesUrl+"svg/"+t+".svg"},t.prototype.hostData=function(){var t;return{role:"img",class:Object.assign({},function(t){var e;return t?((e={"ion-color":!0})["ion-color-"+t]=!0,e):null}(this.color),(t={},t["icon-"+this.size]=!!this.size,t))}},t.prototype.render=function(){return!this.isServer&&this.svgContent?n("div",{class:"icon-inner",innerHTML:this.svgContent}):n("div",{class:"icon-inner"})},Object.defineProperty(t,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.icon-small.sc-ion-icon-h{font-size:var(--ion-icon-size-small,18px)!important}.icon-large.sc-ion-icon-h{font-size:var(--ion-icon-size-large,32px)!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;height:100%;width:100%}svg.sc-ion-icon{fill:currentColor;stroke:currentColor}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary, #3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary, #0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary, #f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success, #10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning, #ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger, #f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light, #f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium, #989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark, #222428)}"},enumerable:!0,configurable:!0}),t}(),a=new Map;function u(t,e,o,n){return e=(e||"md").toLowerCase(),o&&"ios"===e?t=o.toLowerCase():n&&"md"===e?t=n.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=e+"-"+t)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function f(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}var p=function(){function t(){}return t.prototype.getMode=function(){var t=this.el.closest("ion-toolbar");return t&&t.mode||this.mode},t.prototype.hostData=function(){var t,o=this.getMode();return{class:Object.assign({},e.createColorClasses(this.color),(t={},t["title-"+o]=!0,t))}},t.prototype.render=function(){return[n("div",{class:"toolbar-title"},n("slot",null))]},Object.defineProperty(t,"is",{get:function(){return"ion-title"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-title-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.title-ios.sc-ion-title-h{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}.title-md.sc-ion-title-h{padding:0 12px;font-size:20px;font-weight:500}.ion-color.sc-ion-title-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"},enumerable:!0,configurable:!0}),t}(),h=function(){function t(){}return t.prototype.hostData=function(){return{class:e.createColorClasses(this.color)}},t.prototype.render=function(){return[n("div",{class:"toolbar-background"}),n("div",{class:"toolbar-container"},n("slot",{name:"start"}),n("slot",{name:"secondary"}),n("div",{class:"toolbar-content"},n("slot",null)),n("slot",{name:"primary"}),n("slot",{name:"end"}))]},Object.defineProperty(t,"is",{get:function(){return"ion-toolbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toolbar-md-h{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;--background:var(--ion-toolbar-background-color, #f8f8f8);--color:var(--ion-toolbar-text-color, #424242);--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, #c1c4cd));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:56px}.ion-color.sc-ion-toolbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-toolbar-md-h   .toolbar-background.sc-ion-toolbar-md{background:var(--ion-color-base)}.toolbar-container.sc-ion-toolbar-md{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background.sc-ion-toolbar-md{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content.sc-ion-toolbar-md{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;min-width:0;max-width:100%}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();t.IonAnchor=r,t.IonButton=i,t.IonContent=s,t.IonIcon=c,t.IonTitle=p,t.IonToolbar=h,Object.defineProperty(t,"__esModule",{value:!0})});