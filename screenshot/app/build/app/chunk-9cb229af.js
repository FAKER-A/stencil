/*! Built with http://stenciljs.com */
const{h:n}=window.App;function t(n){return!!n.shadowRoot&&!!n.attachShadow}function e(n,t){if(!n){const n="ASSERT: "+t;throw console.error(n),new Error(n)}}function o(n){return n.timeStamp||Date.now()}function r(n){if(n){const t=n.changedTouches;if(t&&t.length>0){const n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}}function i(n){return function(n,t){const e=n._original||n;return{_original:n,emit:a(e.emit.bind(e),0)}}(n)}function a(n,t=0){let e;return(...o)=>{clearTimeout(e),e=setTimeout(n,t,...o)}}export{a,o as b,t as c,e as d,i as e,r as f};