/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){
})(resourcesUrl);


(function(resourcesUrl){const t=window.Ionic=window.Ionic||{};Object.defineProperty(t,"queue",{get:()=>Context.queue});const e=Object.assign({},function(){const t=window.sessionStorage.getItem("ionic-persist-config");return t?JSON.parse(t):{}}(),{persistConfig:!1},t.config,function(){const t={};return window.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,e])=>[decodeURIComponent(t),decodeURIComponent(e)]).filter(([t])=>(function(e,n){return"ionic:"===t.substr(0,"ionic:".length)})()).map(([t,e])=>[t.slice("ionic:".length),e]).forEach(([e,n])=>{t[e]=n}),t}()),n=t.config=Context.config=new class{constructor(t){this.m=new Map(Object.entries(t))}get(t,e){const n=this.m.get(t);return void 0!==n?n:e}getBoolean(t,e=!1){const n=this.m.get(t);return void 0===n?e:"string"==typeof n?"true"===n:!!n}getNumber(t,e){const n=parseFloat(this.m.get(t));return isNaN(n)?void 0!==e?e:NaN:n}set(t,e){this.m.set(t,e)}}(e);n.getBoolean("persistConfig")&&function(t){window.sessionStorage.setItem("ionic-persist-config",JSON.stringify(t))}(e);const o=document.documentElement,i=n.get("mode",o.getAttribute("mode")||(function(t,e){return/iPad|iPhone|iPod/i.test(t.navigator.userAgent)}(window)?"ios":"md"));t.mode=Context.mode=i,n.set("mode",i),o.setAttribute("mode",i),o.classList.add(i);
})(resourcesUrl);
})("App");