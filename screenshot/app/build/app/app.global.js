/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){var e,t,n,r,i;e=window,t=1,n={red:255,green:0,blue:255,alpha:255},i=(r={flat:function(e,t){return{r:n.red,g:n.green,b:n.blue,a:n.alpha}},movement:function(e,t){return{r:(t.r*(n.red/255)+n.red)/2,g:(t.g*(n.green/255)+n.green)/2,b:(t.b*(n.blue/255)+n.blue)/2,a:t.a}}}).flat,e.resemble=function(e){var n={},r=[],a=[],o={red:16,green:16,blue:16,alpha:16,minBrightness:16,maxBrightness:240},h=!1,u=!1;function g(){var e,t=a.length;for(e=0;e<t;e++)"function"==typeof a[e]&&a[e](n)}function s(e,t,n){var r,i;for(r=0;r<e;r++)for(i=0;i<t;i++)n(r,i)}function f(e,t){var n,i=new Image;i.onload=function(){var e,n=document.createElement("canvas"),a=i.width,o=i.height;n.width=a,n.height=o,n.getContext("2d").drawImage(i,0,0,a,o),e=n.getContext("2d").getImageData(0,0,a,o),r.push(e),t(e,a,o)},"string"==typeof e?i.src=e:((n=new FileReader).onload=function(e){i.src=e.target.result},n.readAsDataURL(e))}function l(e,t,n){var r=Math.abs(e-t);return void 0!==e&&void 0!==t&&(e===t||r<o[n])}function c(e,t){var n=l(e.a,t.a,"alpha");return l(e.brightness,t.brightness,"minBrightness")&&n}function d(e,t,n){return.3*e+.59*t+.11*n}function m(e,t){var n=e.r===t.r,r=e.g===t.g,i=e.b===t.b;return n&&r&&i}function b(e,t,n,r,i,a){var h,u,g,s,f,l=0,c=0,d=0;for(D(e),u=-1;u<=1;u++)for(g=-1;g<=1;g++)if(0===u&&0===g);else{if(null===(h=w(t,4*((r+g)*a+(i+u)))))continue;if(x(h),D(h),s=e,f=h,Math.abs(s.brightness-f.brightness)>o.maxBrightness&&l++,m(e,h)&&d++,Math.abs(h.h-e.h)>.3&&c++,c>1||l>1)return!0}return d<2}function v(e,t,n,r){var a=i(n,r);e[t]=a.r,e[t+1]=a.g,e[t+2]=a.b,e[t+3]=a.a}function p(e,n,r){e[n]=r.brightness,e[n+1]=r.brightness,e[n+2]=r.brightness,e[n+3]=r.a*t}function w(e,t,n){var r;return void 0!==(r=e[t])?{r,g:e[t+1],b:e[t+2],a:e[t+3]}:null}function x(e){e.brightness=d(e.r,e.g,e.b)}function D(e){e.h=function(e,t,n){e/=255,t/=255,n/=255;var r,i,a=Math.max(e,t,n),o=Math.min(e,t,n);if(a==o)r=0;else{switch(i=a-o,a){case e:r=(t-n)/i+(t<n?6:0);break;case t:r=(n-e)/i+2;break;case n:r=(e-t)/i+4}r/=6}return r}(e.r,e.g,e.b)}function y(e,t,n){var r,i;return e.height<n||e.width<t?((r=document.createElement("canvas")).width=t,r.height=n,(i=r.getContext("2d")).putImageData(e,0,0),i.getImageData(0,0,t,n)):e}function B(i){var d,m="function"==typeof i;m||(d=i);var D={ignoreNothing:function(){return o.red=16,o.green=16,o.blue=16,o.alpha=16,o.minBrightness=16,o.maxBrightness=240,h=!1,u=!1,m&&i(),D},ignoreAntialiasing:function(){return o.red=32,o.green=32,o.blue=32,o.alpha=32,o.minBrightness=64,o.maxBrightness=96,h=!0,u=!1,m&&i(),D},ignoreColors:function(){return o.alpha=16,o.minBrightness=16,o.maxBrightness=240,h=!1,u=!0,m&&i(),D},repaint:function(){return m&&i(),D},onComplete:function(i){a.push(i);var o=function(){!function(i,a){function o(){var e,i;2===r.length&&(e=r[0].width>r[1].width?r[0].width:r[1].width,i=r[0].height>r[1].height?r[0].height:r[1].height,r[0].width===r[1].width&&r[0].height===r[1].height?n.isSameDimensions=!0:n.isSameDimensions=!1,n.dimensionDifference={width:r[0].width-r[1].width,height:r[0].height-r[1].height},function(e,r,i,a){var o=document.createElement("canvas"),g=e.data,f=r.data;o.width=i,o.height=a;var d,m=o.getContext("2d"),D=m.createImageData(i,a),y=D.data,B=0,C=Date.now();(i>1200||a>1200)&&h&&(d=6),s(a,i,function(e,n){if(!d||e%d!=0&&n%d!=0){var r,a,o,s,m,D,C=4*(e*i+n),M=w(g,C),I=w(f,C);if(null!==M&&null!==I)return u?(x(M),x(I),void(c(M,I)?p(y,C,I):(v(y,C,M,I),B++))):(a=I,o=l((r=M).r,a.r,"red"),s=l(r.g,a.g,"green"),m=l(r.b,a.b,"blue"),D=l(r.a,a.a,"alpha"),void(o&&s&&m&&D?function(e,n,r){e[n]=r.r,e[n+1]=r.g,e[n+2]=r.b,e[n+3]=r.a*t}(y,C,M):h&&(x(M),x(I),b(M,g,0,e,n,i)||b(I,f,0,e,n,i))&&c(M,I)?p(y,C,I):(v(y,C,M,I),B++)))}}),n.misMatchPercentage=(B/(a*i)*100).toFixed(2),n.analysisTime=Date.now()-C,n.getImageDataUrl=function(e){var t=0;return e&&(t=function(e,t,n){t.font="12px sans-serif";var r=t.measureText(e).width+4;return r>n.width&&(n.width=r),n.height+=22,t.fillStyle="#666",t.fillRect(0,0,n.width,18),t.fillStyle="#fff",t.fillRect(0,18,n.width,4),t.fillStyle="#fff",t.textBaseline="top",t.font="12px sans-serif",t.fillText(e,2,1),22}(e,m,o)),m.putImageData(D,0,t),o.toDataURL("image/png")}}(y(r[0],e,i),y(r[1],e,i),e,i),g())}r=[],f(e,o),f(a,o)}(0,d)};return o(),B(o)}};return D}return{onComplete:function(t){a.push(t),f(e,function(e,t,r){!function(e,t,r){var i=0,a=0,o=0,h=0,u=0;s(r,t,function(n,r){var g=4*(n*t+r),s=e[g],f=e[g+1],l=e[g+2],c=d(s,f,l);i++,a+=s/255*100,o+=f/255*100,h+=l/255*100,u+=c/255*100}),n.red=Math.floor(a/i),n.green=Math.floor(o/i),n.blue=Math.floor(h/i),n.brightness=Math.floor(u/i),g()}(e.data,t,r)})},compareTo:function(e){return B(e)}}},e.resemble.outputSettings=function(e){var a;if(e.errorColor)for(a in e.errorColor)n[a]=void 0===e.errorColor[a]?n[a]:e.errorColor[a];return e.errorType&&r[e.errorType]&&(i=r[e.errorType]),t=e.transparency||t,this};
})(resourcesUrl);


(function(resourcesUrl){const t={ipad:function(t){return r(t,/iPad/i)},iphone:function(t){return r(t,/iPhone/i)},ios:function(t){return r(t,/iPad|iPhone|iPod/i)},android:function(t){return r(t,/android|sink/i)},phablet:function(t){const n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),i=Math.max(n,e);return o>390&&o<520&&i>620&&i<800},tablet:function(t){const n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),i=Math.max(n,e);return o>460&&o<820&&i>780&&i<1400},cordova:o,capacitor:i,electron:function(t){return r(t,/electron/)},pwa:function(t){return t.matchMedia("(display-mode: standalone)").matches},mobile:e,desktop:function(t){return!e(t)},hybrid:function(t){return o(t)||i(t)}};function n(t,n){return function(t){return t.Ionic.platforms}(t).includes(n)}function e(t){return function(t,n){return t.matchMedia("(any-pointer:coarse)").matches}(t)}function o(t){const n=t;return!!(n.cordova||n.phonegap||n.PhoneGap)}function i(t){const n=t.Capacitor;return!(!n||!n.isNative)}function r(t,n){return n.test(t.navigator.userAgent)}const c=window,s=c.Ionic=c.Ionic||{};Object.defineProperty(s,"queue",{get:()=>Context.queue}),function(n){let e=n.Ionic.platforms;if(null==e){e=n.Ionic.platforms=function(n){return Object.keys(t).filter(e=>t[e](n))}(n);const o=n.document.documentElement.classList;e.forEach(t=>o.add(`plt-${t}`))}}(c),Context.isPlatform=n;const u=Object.assign({},function(){try{const t=window.sessionStorage.getItem("ionic-persist-config");return t?JSON.parse(t):{}}catch(t){return{}}}(),{persistConfig:!1},s.config,function(){const t={};return window.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,n])=>[decodeURIComponent(t),decodeURIComponent(n)]).filter(([t])=>(function(n,e){return"ionic:"===t.substr(0,"ionic:".length)})()).map(([t,n])=>[t.slice("ionic:".length),n]).forEach(([n,e])=>{t[n]=e}),t}()),a=s.config=Context.config=new class{constructor(t){this.m=new Map(Object.entries(t))}get(t,n){const e=this.m.get(t);return void 0!==e?e:n}getBoolean(t,n=!1){const e=this.m.get(t);return void 0===e?n:"string"==typeof e?"true"===e:!!e}getNumber(t,n){const e=parseFloat(this.m.get(t));return isNaN(e)?void 0!==n?n:NaN:e}set(t,n){this.m.set(t,n)}}(u);a.getBoolean("persistConfig")&&function(t){try{window.sessionStorage.setItem("ionic-persist-config",JSON.stringify(t))}catch(t){return}}(u);const d=document.documentElement,f=a.get("mode",d.getAttribute("mode")||(n(c,"ios")?"ios":"md"));s.mode=Context.mode=f,a.set("mode",f),d.setAttribute("mode",f),d.classList.add(f);
})(resourcesUrl);
})("App");