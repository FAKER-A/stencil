/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{d as e}from"./chunk-f7b6af08.js";class r{constructor(){this.translucent=!1}hostData(){const t=e(this.mode,"header"),r=this.translucent?e(this.mode,"header-translucent"):null;return{class:Object.assign({},t,r)}}static get is(){return"ion-header"}static get properties(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-header{display:block;position:relative;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"}static get styleMode(){return"ios"}}export{r as IonHeader};