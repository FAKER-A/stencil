/*! Built with http://stenciljs.com */
App.loadBundle("chunk-abcf1658.js",["exports"],function(n){function o(n,o){var r;return void 0===o&&(o=0),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];clearTimeout(r),r=setTimeout.apply(void 0,[n,o].concat(t))}}window.App.h,n.debounce=o,n.hasShadowDom=function(n){return!!n.shadowRoot&&!!n.attachShadow},n.now=function(n){return n.timeStamp||Date.now()},n.assert=function(n,o){if(!n){var r="ASSERT: "+o;throw console.error(r),new Error(r)}},n.deferEvent=function(n){return function(n,r){var t=n._original||n;return{_original:n,emit:o(t.emit.bind(t),0)}}(n)},n.pointerCoord=function(n){if(n){var o=n.changedTouches;if(o&&o.length>0){var r=o[0];return{x:r.clientX,y:r.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}}});