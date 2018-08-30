/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as s,b as a}from"./chunk-e3bd8b60.js";import{f as e,g as n,h as i}from"./chunk-b48a0e4c.js";class o{constructor(){this.appData={masterSnapshotId:null,snapshots:[]},this.isAdmin=!1,this.a=null,this.b=null}async componentWillLoad(){this.isAdmin="localhost"===window.location.hostname;try{const t=await fetch("/screenshot/data/data.json");this.appData=await t.json(),this.appData.masterSnapshotId&&(this.a=this.appData.masterSnapshotId)}catch(t){console.error(t)}}async setMasterSnapshot(t){const s=await this.alertCtrl.create({header:`Set as Master: ${t}`,message:`Are you sure you want to master snapshot to ${t}?`,buttons:[{text:"Cancel",handler:()=>{s.dismiss()}},{text:"Set as Master",handler:async()=>{try{const a=await fetch(`/?set_master_snapshot=${t}`);this.appData=await a.json(),s.dismiss()}catch(t){console.error(t)}}}]});await s.present()}async deleteSnapshot(t){const s=await this.alertCtrl.create({header:`Delete ${t}`,message:`Are you sure you want to delete snapshot ${t}?`,buttons:[{text:"Cancel",handler:()=>{s.dismiss()}},{text:"Delete",handler:async()=>{try{const a=await fetch(`/?delete_snapshot=${t}`);this.appData=await a.json(),s.dismiss()}catch(t){console.error(t)}}}]});await s.present()}render(){return[t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-title",null,"Screenshot Comparison"),t("ion-buttons",{slot:"end"},t("ion-button",{disabled:null===this.a||null===this.b,href:`/${this.a}/${this.b}`},"Compare")))),t("ion-content",null,t("table",{class:"snapshot-list"},this.appData.snapshots.map(e=>{const n={"is-master":e.id===this.appData.masterSnapshotId};return t("tr",{key:e.id,class:n},t("td",null,t("ion-radio",{onClick:()=>{this.a===e.id?this.a=null:(this.a=e.id,this.b===e.id&&(this.b=null))},checked:this.a===e.id})),t("td",null,t("ion-radio",{onClick:()=>{this.b===e.id?this.b=null:(this.b=e.id,this.a===e.id&&(this.a=null))},checked:this.b===e.id})),t("td",null,t("ion-anchor",{href:"/"+e.id},e.id)),t("td",{class:"desc"},e.msg&&e.repoUrl?t("span",null,t("a",{href:a(e.repoUrl,e.id),target:"_blank"},e.msg)):e.msg?t("span",null,e.msg):null),t("td",{class:"timestamp"},s(e.timestamp)),this.isAdmin?t("td",null,t("ion-anchor",{tappable:!0,hidden:this.appData.masterSnapshotId===e.id,onClick:this.setMasterSnapshot.bind(this,e.id)},"Set as Master")):null,this.isAdmin?t("td",null,t("ion-anchor",{tappable:!0,hidden:this.appData.masterSnapshotId===e.id,onClick:this.deleteSnapshot.bind(this,e.id),color:"danger"},"Delete")):null)})))]}static get is(){return"snapshot-list"}static get properties(){return{a:{state:!0},alertCtrl:{connect:"ion-alert-controller"},appData:{state:!0},b:{state:!0}}}static get style(){return".is-master{background:#efffe6}table.snapshot-list{margin:8px;width:100%;font-size:12px}.snapshot-list td{padding:4px 8px}.snapshot-list .desc,.snapshot-list .timestamp{white-space:nowrap}"}}class r{create(t){return e(this.doc.createElement("ion-alert"),t)}dismiss(t,s,a){return n(this.doc,t,s,"ion-alert",a)}async getTop(){return i(this.doc,"ion-alert")}static get is(){return"ion-alert-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{o as SnapshotList,r as IonAlertController};