/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{d as e}from"./chunk-2bc53e8b.js";class i{constructor(){this.isVisible=!1,this.lazy=!0}componentWillLoad(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidUnload(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,e,i){if(this.lazy&&this.win&&this.win.IntersectionObserver){const s=this.io=new this.win.IntersectionObserver(t=>{t[0].isIntersecting&&(s.disconnect(),this.io=void 0,i())},{rootMargin:e});s.observe(t)}else i()}loadIcon(){if(!this.isServer&&this.isVisible){const t=this.getUrl();t&&function(t){let e=s.get(t);return e||(e=fetch(t,{cache:"force-cache"}).then(t=>t.ok?t.text():Promise.resolve(null)),s.set(t,e)),e}(t).then(t=>{this.svgContent=function(t,e,i){if(e){const s=t.createDocumentFragment(),n=t.createElement("div");n.innerHTML=e,s.appendChild(n);for(let t=n.childNodes.length-1;t>=0;t--)"svg"!==n.childNodes[t].nodeName.toLowerCase()&&n.removeChild(n.childNodes[t]);const o=n.firstElementChild;if(o&&"svg"===o.nodeName.toLowerCase()&&(i&&o.setAttribute("class",i),function t(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const i=e.attributes[t].value;if("string"==typeof i&&0===i.toLowerCase().indexOf("on"))return!1}for(let i=0;i<e.childNodes.length;i++)if(!t(e.childNodes[i]))return!1}return!0}(o)))return n.innerHTML}return""}(this.doc,t,this.el["s-sc"])})}if(!this.ariaLabel){const t=n(this.name,this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," "))}}getUrl(){let t=o(this.src);return t||((t=n(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=o(this.icon))?t:(t=n(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)}getNamedUrl(t){return`${this.resourcesUrl}svg/${t}.svg`}hostData(){return{role:"img",class:Object.assign({},(t=this.color,t?{"ion-color":!0,[`ion-color-${t}`]:!0}:null),{[`icon-${this.size}`]:!!this.size})};var t}render(){return!this.isServer&&this.svgContent?t("div",{class:"icon-inner",innerHTML:this.svgContent}):t("div",{class:"icon-inner"})}static get is(){return"ion-icon"}static get encapsulation(){return"shadow"}static get properties(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}}static get style(){return".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.icon-small.sc-ion-icon-h{font-size:var(--ion-icon-size-small,18px)!important}.icon-large.sc-ion-icon-h{font-size:var(--ion-icon-size-large,32px)!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;height:100%;width:100%}svg.sc-ion-icon{fill:currentColor;stroke:currentColor}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary, #3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary, #0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary, #f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success, #10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning, #ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger, #f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light, #f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium, #989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark, #222428)}"}}const s=new Map;function n(t,e,i,s){return e=(e||"md").toLowerCase(),i&&"ios"===e?t=i.toLowerCase():s&&"md"===e?t=s.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=`${e}-${t}`)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function o(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}class r{constructor(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}tapClickChanged(t){this.enableListener(this,"ionActivated",t,this.parent),this.enableListener(this,"touchstart",!t),this.enableListener(this,"mousedown",!t)}ionActivated(t){this.addRipple(t.detail.x,t.detail.y)}touchStart(t){this.lastClick=e(t);const i=t.touches[0];this.addRipple(i.clientX,i.clientY)}mouseDown(t){const i=e(t);this.lastClick<i-1e3&&this.addRipple(t.pageX,t.pageY)}componentDidLoad(){this.tapClickChanged(this.tapClick)}addRipple(t,e){let i,s,n;this.queue.read(()=>{const o=this.el.getBoundingClientRect(),r=o.width,a=o.height;n=Math.min(2*Math.sqrt(r*r+a*a),c),i=t-o.left-n/2,s=e-o.top-n/2}),this.queue.write(()=>{const t=this.doc.createElement("div");t.classList.add("ripple-effect");const e=t.style,o=Math.max(a*Math.sqrt(n),l);e.top=s+"px",e.left=i+"px",e.width=n+"px",e.height=n+"px",e.animationDuration=o+"ms",(this.el.shadowRoot||this.el).appendChild(t),setTimeout(()=>t.remove(),o+50)})}render(){return null}static get is(){return"ion-ripple-effect"}static get encapsulation(){return"shadow"}static get properties(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}}static get listeners(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]}static get style(){return".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"}}const a=35,l=260,c=550;export{i as IonIcon,r as IonRippleEffect};