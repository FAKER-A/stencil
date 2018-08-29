/*! Built with http://stenciljs.com */
const{h:t}=window.App;class s{constructor(){this.screenshotDiffs=[]}async componentWillLoad(){try{const t=fetch(`/screenshot/data/snapshots/${this.a}.json`),s=fetch(`/screenshot/data/snapshots/${this.b}.json`),e=fetch("/screenshot/data/data.json"),a=await t,i=await s,n=await e,o=await a.json(),r=await i.json(),h=await n.json();this.masterSnapshotId=h.masterSnapshotId,this.screenshotDiffs=o.screenshots.map(t=>({id:t.id,desc:t.desc,imageA:`/screenshot/images/${t.image}`,imageB:"",diff:null})),r.screenshots.forEach(t=>{const s=this.screenshotDiffs.find(s=>s.id===t.id);s&&(s.imageB=`/screenshot/images/${t.image}`)}),this.screenshotDiffs=this.screenshotDiffs.filter(t=>t.imageA!==t.imageB),this.screenshotDiffs.forEach(t=>{t.diff=window.resemble(t.imageA).compareTo(t.imageB).onComplete(s=>{s.misMatchPercentage>.5&&(document.getElementById("diff-"+t.id).src=s.getImageDataUrl(),document.getElementById(`mismatch-${t.id}`).textContent=s.misMatchPercentage,document.getElementById(`row-${t.id}`).hidden=!1)})}),this.title=`Compare: ${this.a}${this.a===h.masterSnapshotId?" (master)":""} to ${this.b}${this.b===h.masterSnapshotId?" (master)":""}`}catch(t){console.error(t)}}render(){return[t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"/"})),t("ion-title",null,this.title))),t("ion-content",{padding:!0},t("table",{class:"snapshot-compare"},t("tr",null,t("td",null,t("ion-anchor",{href:"/"+this.a},this.a," ",this.a===this.masterSnapshotId?" (master)":"")),t("td",null,t("ion-anchor",{href:"/"+this.b},this.b," ",this.b===this.masterSnapshotId?" (master)":"")),t("td",null,"Diff"),t("td",null,"Analysis")),this.screenshotDiffs.map(s=>t("tr",{id:"row-"+s.id,hidden:!0},t("td",null,t("img",{src:s.imageA})),t("td",null,t("img",{src:s.imageB})),t("td",null,t("img",{src:"",id:"diff-"+s.id})),t("td",null,t("p",null,s.desc),t("p",null,t("strong",null,"Mismatch"),": ",t("span",{id:"mismatch-"+s.id}),"%"))))))]}static get is(){return"snapshot-compare"}static get properties(){return{a:{type:String,attr:"a"},b:{type:String,attr:"b"}}}static get style(){return"table.snapshot-compare{width:100%;border-left:1px solid #000;border-bottom:1px solid #000;font-size:12px}.snapshot-compare td{border-top:1px solid #000;border-right:1px solid #000;padding:10px;vertical-align:top}.snapshot-compare .id{margin-top:0;white-space:nowrap}"}}export{s as SnapshotCompare};