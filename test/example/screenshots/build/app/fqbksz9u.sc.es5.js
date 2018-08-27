/*! Built with http://stenciljs.com */
App.loadBundle("fqbksz9u",["exports","./chunk-e76d44c9.js"],function(e,t){var i=window.App.h,n=function(){function e(){this.isVisible=!1,this.lazy=!0}return e.prototype.componentWillLoad=function(){var e=this;this.waitUntilVisible(this.el,"50px",function(){e.isVisible=!0,e.loadIcon()})},e.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.waitUntilVisible=function(e,t,i){var n=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var o=this.io=new this.win.IntersectionObserver(function(e){e[0].isIntersecting&&(o.disconnect(),n.io=void 0,i())},{rootMargin:t});o.observe(e)}else i()},e.prototype.loadIcon=function(){var e=this;if(!this.isServer&&this.isVisible){var t=this.getUrl();t&&function(e){var t=o.get(e);return t||(t=fetch(e,{cache:"force-cache"}).then(function(e){return e.ok?e.text():Promise.resolve(null)}),o.set(e,t)),t}(t).then(function(t){e.svgContent=function(e,t,i){if(t){var n=e.createDocumentFragment(),o=e.createElement("div");o.innerHTML=t,n.appendChild(o);for(var r=o.childNodes.length-1;r>=0;r--)"svg"!==o.childNodes[r].nodeName.toLowerCase()&&o.removeChild(o.childNodes[r]);var a=o.firstElementChild;if(a&&"svg"===a.nodeName.toLowerCase()&&(i&&a.setAttribute("class",i),function e(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var i=0;i<t.attributes.length;i++){var n=t.attributes[i].value;if("string"==typeof n&&0===n.toLowerCase().indexOf("on"))return!1}for(i=0;i<t.childNodes.length;i++)if(!e(t.childNodes[i]))return!1}return!0}(a)))return o.innerHTML}return""}(e.doc,t,e.el["s-sc"])})}if(!this.ariaLabel){var i=r(this.name,this.mode,this.ios,this.md);i&&(this.ariaLabel=i.replace("ios-","").replace("md-","").replace(/\-/g," "))}},e.prototype.getUrl=function(){var e=a(this.src);return e||((e=r(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(e):(e=a(this.icon))?e:(e=r(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(e):null)},e.prototype.getNamedUrl=function(e){return this.resourcesUrl+"svg/"+e+".svg"},e.prototype.hostData=function(){var e;return{role:"img",class:Object.assign({},function(e){var t;return e?((t={"ion-color":!0})["ion-color-"+e]=!0,t):null}(this.color),(e={},e["icon-"+this.size]=!!this.size,e))}},e.prototype.render=function(){return!this.isServer&&this.svgContent?i("div",{class:"icon-inner",innerHTML:this.svgContent}):i("div",{class:"icon-inner"})},Object.defineProperty(e,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.icon-small.sc-ion-icon-h{font-size:var(--ion-icon-size-small,18px)!important}.icon-large.sc-ion-icon-h{font-size:var(--ion-icon-size-large,32px)!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;height:100%;width:100%}svg.sc-ion-icon{fill:currentColor;stroke:currentColor}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary, #3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary, #0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary, #f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success, #10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning, #ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger, #f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light, #f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium, #989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark, #222428)}"},enumerable:!0,configurable:!0}),e}(),o=new Map;function r(e,t,i,n){return t=(t||"md").toLowerCase(),i&&"ios"===t?e=i.toLowerCase():n&&"md"===t?e=n.toLowerCase():e&&(e=e.toLowerCase(),/^md-|^ios-|^logo-/.test(e)||(e=t+"-"+e)),"string"!=typeof e||""===e.trim()?null:""!==e.replace(/[a-z]|-|\d/gi,"")?null:e}function a(e){return"string"==typeof e&&(e=e.trim()).length>0&&/(\/|\.)/.test(e)?e:null}var s=function(){function e(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}return e.prototype.tapClickChanged=function(e){this.enableListener(this,"ionActivated",e,this.parent),this.enableListener(this,"touchstart",!e),this.enableListener(this,"mousedown",!e)},e.prototype.ionActivated=function(e){this.addRipple(e.detail.x,e.detail.y)},e.prototype.touchStart=function(e){this.lastClick=t.now(e);var i=e.touches[0];this.addRipple(i.clientX,i.clientY)},e.prototype.mouseDown=function(e){var i=t.now(e);this.lastClick<i-1e3&&this.addRipple(e.pageX,e.pageY)},e.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},e.prototype.addRipple=function(e,t){var i,n,o,r=this;this.queue.read(function(){var a=r.el.getBoundingClientRect(),s=a.width,c=a.height;o=Math.min(2*Math.sqrt(s*s+c*c),u),i=e-a.left-o/2,n=t-a.top-o/2}),this.queue.write(function(){var e=r.doc.createElement("div");e.classList.add("ripple-effect");var t=e.style,a=Math.max(c*Math.sqrt(o),l);t.top=n+"px",t.left=i+"px",t.width=o+"px",t.height=o+"px",t.animationDuration=a+"ms",(r.el.shadowRoot||r.el).appendChild(e),setTimeout(function(){return e.remove()},a+50)})},e.prototype.render=function(){return null},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"},enumerable:!0,configurable:!0}),e}(),c=35,l=260,u=550;e.IonIcon=n,e.IonRippleEffect=s,Object.defineProperty(e,"__esModule",{value:!0})});