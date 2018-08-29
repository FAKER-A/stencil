/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as formatDate } from './chunk-a8bc5fbd.js';
import { f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-20186de4.js';

class SnapshotList {
    constructor() {
        this.appData = { masterSnapshotId: null, snapshots: [] };
        this.isAdmin = false;
        this.a = null;
        this.b = null;
    }
    async componentWillLoad() {
        this.isAdmin = (window.location.hostname === 'localhost');
        try {
            const rsp = await fetch(`/screenshot/data/data.json`);
            this.appData = await rsp.json();
            if (this.appData.masterSnapshotId) {
                this.a = this.appData.masterSnapshotId;
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    async setMasterSnapshot(snapshotId) {
        const alert = await this.alertCtrl.create({
            header: `Set as Master: ${snapshotId}`,
            message: `Are you sure you want to master snapshot to ${snapshotId}?`,
            buttons: [
                {
                    text: `Cancel`,
                    handler: () => {
                        alert.dismiss();
                    }
                },
                {
                    text: `Set as Master`,
                    handler: async () => {
                        try {
                            const rsp = await fetch(`/?set_master_snapshot=${snapshotId}`);
                            this.appData = await rsp.json();
                            alert.dismiss();
                        }
                        catch (e) {
                            console.error(e);
                        }
                    }
                }
            ]
        });
        await alert.present();
    }
    async deleteSnapshot(snapshotId) {
        const alert = await this.alertCtrl.create({
            header: `Delete ${snapshotId}`,
            message: `Are you sure you want to delete snapshot ${snapshotId}?`,
            buttons: [
                {
                    text: `Cancel`,
                    handler: () => {
                        alert.dismiss();
                    }
                },
                {
                    text: `Delete`,
                    handler: async () => {
                        try {
                            const rsp = await fetch(`/?delete_snapshot=${snapshotId}`);
                            this.appData = await rsp.json();
                            alert.dismiss();
                        }
                        catch (e) {
                            console.error(e);
                        }
                    }
                }
            ]
        });
        await alert.present();
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "primary" },
                    h("ion-title", null, "Screenshot Comparison"),
                    h("ion-buttons", { slot: "end" },
                        h("ion-button", { disabled: this.a === null || this.b === null, href: `/${this.a}/${this.b}` }, "Compare")))),
            h("ion-content", null,
                h("table", { class: "snapshot-list" }, this.appData.snapshots.map(snapshot => {
                    const rowCssClasses = {
                        'is-master': snapshot.id === this.appData.masterSnapshotId
                    };
                    return (h("tr", { key: snapshot.id, class: rowCssClasses },
                        h("td", null,
                            h("ion-radio", { onClick: () => {
                                    if (this.a === snapshot.id) {
                                        this.a = null;
                                    }
                                    else {
                                        this.a = snapshot.id;
                                        if (this.b === snapshot.id) {
                                            this.b = null;
                                        }
                                    }
                                }, checked: this.a === snapshot.id })),
                        h("td", null,
                            h("ion-radio", { onClick: () => {
                                    if (this.b === snapshot.id) {
                                        this.b = null;
                                    }
                                    else {
                                        this.b = snapshot.id;
                                        if (this.a === snapshot.id) {
                                            this.a = null;
                                        }
                                    }
                                }, checked: this.b === snapshot.id })),
                        h("td", null,
                            h("ion-anchor", { href: '/' + snapshot.id }, snapshot.id)),
                        h("td", { class: "desc" }, snapshot.desc),
                        h("td", null, formatDate(snapshot.timestamp)),
                        (this.isAdmin ? (h("td", null,
                            h("ion-anchor", { tappable: true, hidden: this.appData.masterSnapshotId === snapshot.id, onClick: this.setMasterSnapshot.bind(this, snapshot.id) }, "Set as Master"))) : null),
                        (this.isAdmin ? (h("td", null,
                            h("ion-anchor", { tappable: true, hidden: this.appData.masterSnapshotId === snapshot.id, onClick: this.deleteSnapshot.bind(this, snapshot.id), color: "danger" }, "Delete"))) : null)));
                })))
        ];
    }
    static get is() { return "snapshot-list"; }
    static get properties() { return {
        "a": {
            "state": true
        },
        "alertCtrl": {
            "connect": "ion-alert-controller"
        },
        "appData": {
            "state": true
        },
        "b": {
            "state": true
        }
    }; }
    static get style() { return ".is-master {\n  background: #efffe6;\n}\n\ntable.snapshot-list {\n  margin: 8px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.snapshot-list td {\n  padding: 4px 8px;\n}\n\n.snapshot-list .desc {\n  white-space: nowrap;\n}"; }
}

class AlertController {
    /**
     * Create an alert overlay with alert options
     */
    create(opts) {
        return createOverlay(this.doc.createElement("ion-alert"), opts);
    }
    /**
     * Dismiss the open alert overlay.
     */
    dismiss(data, role, alertId) {
        return dismissOverlay(this.doc, data, role, "ion-alert", alertId);
    }
    /**
     * Get the most recently opened alert overlay.
     */
    getTop() {
        return getOverlay(this.doc, "ion-alert");
    }
    static get is() { return "ion-alert-controller"; }
    static get properties() {
        return {
            "create": {
                "method": true
            },
            "dismiss": {
                "method": true
            },
            "doc": {
                "context": "document"
            },
            "getTop": {
                "method": true
            }
        };
    }
}

export { SnapshotList, AlertController as IonAlertController };
