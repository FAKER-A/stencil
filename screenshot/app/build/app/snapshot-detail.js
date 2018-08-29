/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as formatDate } from './chunk-a8bc5fbd.js';

class SnapshotDetail {
    constructor() {
        this.snapshot = null;
    }
    async componentWillLoad() {
        try {
            const rsp = await fetch(`/screenshot/data/snapshots/${this.snapshotId}.json`);
            this.snapshot = await rsp.json();
        }
        catch (e) {
            console.error(e);
        }
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "primary" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/", text: "Back", icon: "" })),
                    h("ion-title", null,
                        "Snapshot ",
                        this.snapshotId))),
            h("ion-content", { padding: true },
                this.snapshot.desc && this.snapshot.commitUrl ? (h("p", null,
                    h("a", { href: this.snapshot.commitUrl }, this.snapshot.desc))) : this.snapshot.desc ? (h("p", null, this.snapshot.desc)) : null,
                h("p", null, formatDate(this.snapshot.timestamp)),
                h("table", { class: "snapshot-detail" }, this.snapshot.screenshots.map(screenshot => {
                    return (h("tr", null,
                        h("td", null,
                            h("img", { src: `/screenshot/images/${screenshot.image}` })),
                        h("td", null,
                            h("p", { class: "id" },
                                h("strong", null, "ID:"),
                                " ",
                                screenshot.id),
                            h("p", { class: "desc" }, screenshot.desc))));
                })))
        ];
    }
    static get is() { return "snapshot-detail"; }
    static get properties() { return {
        "snapshotId": {
            "type": String,
            "attr": "snapshot-id"
        }
    }; }
    static get style() { return "table.snapshot-detail {\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  font-size: 12px;\n}\n\n.snapshot-detail td {\n  border-top: 1px solid black;\n  border-right: 1px solid black;\n  padding: 10px;\n  vertical-align: top;\n}\n\n.snapshot-detail .id {\n  margin-top: 0;\n  white-space: nowrap;\n}"; }
}

export { SnapshotDetail };
