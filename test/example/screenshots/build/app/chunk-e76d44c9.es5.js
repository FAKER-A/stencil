/*! Built with http://stenciljs.com */
App.loadBundle("chunk-e76d44c9.js",["exports"],function(n){function t(n){return!!n.shadowRoot&&!!n.attachShadow}window.App.h,n.hasShadowDom=t,n.deferEvent=function(n){return function(n,t){var e=n._original||n;return{_original:n,emit:function(n,t){var e;return void 0===t&&(t=0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,[n,t].concat(i))}}(e.emit.bind(e),0)}}(n)},n.renderHiddenInput=function(n,e,i,o){if(t(n)){var a=n.querySelector("input.aux-input");a||((a=n.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=o,a.name=e,a.value=i}},n.now=function(n){return n.timeStamp||Date.now()}});