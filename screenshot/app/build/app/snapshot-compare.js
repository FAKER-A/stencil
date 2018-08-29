/*! Built with http://stenciljs.com */
const { h } = window.App;

class SnapshotCompare {
    constructor() {
        this.screenshotDiffs = [];
    }
    async componentWillLoad() {
        try {
            const fetchA = fetch(`/screenshot/data/snapshots/${this.a}.json`);
            const fetchB = fetch(`/screenshot/data/snapshots/${this.b}.json`);
            const fetchData = fetch(`/screenshot/data/data.json`);
            const rspA = await fetchA;
            const rspB = await fetchB;
            const rspData = await fetchData;
            const snapshotA = await rspA.json();
            const snapshotB = await rspB.json();
            const data = await rspData.json();
            this.masterSnapshotId = data.masterSnapshotId;
            this.screenshotDiffs = snapshotA.screenshots.map(screenshotA => {
                return {
                    id: screenshotA.id,
                    desc: screenshotA.desc,
                    imageA: `/screenshot/images/${screenshotA.image}`,
                    imageB: '',
                    diff: null
                };
            });
            snapshotB.screenshots.forEach(screenshotB => {
                const a = this.screenshotDiffs.find(s => s.id === screenshotB.id);
                if (!a)
                    return;
                a.imageB = `/screenshot/images/${screenshotB.image}`;
            });
            this.screenshotDiffs = this.screenshotDiffs.filter(diff => diff.imageA !== diff.imageB);
            this.screenshotDiffs.forEach(screenshotDiff => {
                screenshotDiff.diff = window.resemble(screenshotDiff.imageA)
                    .compareTo(screenshotDiff.imageB)
                    .onComplete(data => {
                    if (data.misMatchPercentage > 0.5) {
                        const diffImage = document.getElementById('diff-' + screenshotDiff.id);
                        diffImage.src = data.getImageDataUrl();
                        document.getElementById(`mismatch-${screenshotDiff.id}`).textContent = data.misMatchPercentage;
                        document.getElementById(`row-${screenshotDiff.id}`).hidden = false;
                    }
                });
            });
            this.title = `Compare: ${this.a}${this.a === data.masterSnapshotId ? ' (master)' : ''} to ${this.b}${this.b === data.masterSnapshotId ? ' (master)' : ''}`;
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
                        h("ion-back-button", { defaultHref: "/" })),
                    h("ion-title", null, this.title))),
            h("ion-content", { padding: true },
                h("table", { class: "snapshot-compare" },
                    h("tr", null,
                        h("td", null,
                            h("ion-anchor", { href: '/' + this.a },
                                this.a,
                                " ",
                                this.a === this.masterSnapshotId ? ' (master)' : '')),
                        h("td", null,
                            h("ion-anchor", { href: '/' + this.b },
                                this.b,
                                " ",
                                this.b === this.masterSnapshotId ? ' (master)' : '')),
                        h("td", null, "Diff"),
                        h("td", null, "Analysis")),
                    this.screenshotDiffs.map(diff => {
                        return (h("tr", { id: 'row-' + diff.id, hidden: true },
                            h("td", null,
                                h("img", { src: diff.imageA })),
                            h("td", null,
                                h("img", { src: diff.imageB })),
                            h("td", null,
                                h("img", { src: '', id: 'diff-' + diff.id })),
                            h("td", null,
                                h("p", null, diff.desc),
                                h("p", null,
                                    h("strong", null, "Mismatch"),
                                    ": ",
                                    h("span", { id: 'mismatch-' + diff.id }),
                                    "%"))));
                    })))
        ];
    }
    static get is() { return "snapshot-compare"; }
    static get properties() { return {
        "a": {
            "type": String,
            "attr": "a"
        },
        "b": {
            "type": String,
            "attr": "b"
        }
    }; }
    static get style() { return "table.snapshot-compare {\n  width: 100%;\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  font-size: 12px;\n}\n\n.snapshot-compare td {\n  border-top: 1px solid black;\n  border-right: 1px solid black;\n  padding: 10px;\n  vertical-align: top;\n}\n\n.snapshot-compare .id {\n  margin-top: 0;\n  white-space: nowrap;\n}"; }
}

export { SnapshotCompare };
