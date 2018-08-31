/*! Built with http://stenciljs.com */
App.loadBundle("gesture.js",["exports"],function(t){window.App.h;var e,r=function(){function t(t,e,r,i,n){this.id=e,this.name=r,this.priority=i,this.disableScroll=n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),i=function(){function t(t,e,r,i){this.id=t,this.disable=r,this.disableScroll=i,this.ctrl=e}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),n=new(function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set,this.capturedId=null}return t.prototype.createGesture=function(t){return new r(this,this.newID(),t.name,t.priority?t.priority:0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new i(this.newID(),this,t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach(function(t){n=Math.max(n,t)}),n===r){this.capturedId=e,i.clear();var s=new CustomEvent("ionGestureCaptured",{detail:t});return this.doc.body.dispatchEvent(s),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId&&t===this.capturedId&&(this.capturedId=null)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);r||(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t)},t.prototype.canStart=function(t){return!this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return!!this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}())(document);function s(t,r,i,n){var s,o,a=function(t){if(void 0===e)try{var r=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("optsTest",function(){},r)}catch(t){e=!1}return!!e}(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;return t.__zone_symbol__addEventListener?(s="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(s="addEventListener",o="removeEventListener"),t[s](r,i,a),function(){t[o](r,i,a)}}var o=2e3;function a(t){return t instanceof Document?t:t.ownerDocument}function c(t,e){var r=t.currentX,i=t.currentY,n=t.timeStamp;u(e,t);var s=t.currentX,o=t.currentY,a=(t.timeStamp=l(e))-n;if(a>0&&a<100){var c=(s-r)/a,d=(o-i)/a;t.velocityX=.7*c+.3*t.velocityX,t.velocityY=.7*d+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=o-t.startY,t.event=e}function u(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var s=n[0];r=s.clientX,i=s.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i}function l(t){return t.timeStamp||Date.now()}t.createGesture=function(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),r=e.canStart,i=e.onWillStart,d=e.onStart,h=e.onEnd,p=e.notCaptured,f=e.onMove,v=e.threshold,b=e.queue,y={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},S=function(t,e,r,i,n){var c,u,l,d,h,p,f,v=0;function b(i){v=Date.now()+o,e(i)&&(!u&&r&&(u=s(t,"touchmove",r,n)),l||(l=s(t,"touchend",S,n)),d||(d=s(t,"touchcancel",S,n)))}function y(i){v>Date.now()||e(i)&&(!p&&r&&(p=s(a(t),"mousemove",r,n)),f||(f=s(a(t),"mouseup",m,n)))}function S(t){g(),i&&i(t)}function m(t){X(),i&&i(t)}function g(){u&&u(),l&&l(),d&&d(),u=l=d=void 0}function X(){p&&p(),f&&f(),p=f=void 0}function Y(){g(),X()}function w(e){e?(c&&c(),h&&h(),c=h=void 0,Y()):(c||(c=s(t,"touchstart",b,n)),h||(h=s(t,"mousedown",y,n)))}return{setDisabled:w,stop:Y,destroy:function(){w(!0),i=r=e=void 0}}}(e.el,function(t){var e=l(t);return!(Y||!w)&&(u(t,y),y.startX=y.currentX,y.startY=y.currentY,y.startTimeStamp=y.timeStamp=e,y.velocityX=y.velocityY=y.deltaX=y.deltaY=0,y.event=t,(!r||!1!==r(y))&&(g.release(),!!g.start()&&(Y=!0,0===v?G():(m.start(y.startX,y.startY),!0))))},function(t){X?!_&&w&&(_=!0,c(y,t),b.write(D)):(c(y,t),m.detect(y.currentX,y.currentY)&&(m.isGesture()&&G()||(E(),S.stop(),p&&p(y))))},function(t){var e=X,r=w;E(),r&&(c(y,t),e?h&&h(y):p&&p(y))},{capture:!1}),m=function(t,r,i){var n=e.maxAngle*(Math.PI/180),s="x"===t,o=Math.cos(n),a=r*r,c=0,u=0,l=!1,d=0;return{start:function(t,e){c=t,u=e,d=0,l=!0},detect:function(t,e){if(!l)return!1;var r=t-c,i=e-u,n=r*r+i*i;if(n<a)return!1;var h=Math.sqrt(n),p=(s?r:i)/h;return d=p>o?1:p<-o?-1:0,l=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(e.direction,e.threshold),g=n.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),X=!1,Y=!1,w=!0,_=!1;function D(){X&&(_=!1,f&&f(y))}function G(){return!(g&&!g.capture()||(X=!0,w=!1,y.startX=y.currentX,y.startY=y.currentY,y.startTimeStamp=y.timeStamp,i?i(y).then(I):I(),0))}function I(){d&&d(y),w=!0}function E(){X=!1,Y=!1,_=!1,w=!0,g.release()}return{setDisabled:function(t){S.setDisabled(t)},destroy:function(){g.destroy(),S.destroy()}}},Object.defineProperty(t,"__esModule",{value:!0})});