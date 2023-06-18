import stream from 'stream';
class SplitLinesTransform extends stream.Transform {
    constructor() {
        super(...arguments);
        this._lastLineData = '';
    }
    _transform(chunk, _encoding, done) {
        var _a;
        const data = this._lastLineData + String(chunk);
        const lines = data.split('\n');
        this._lastLineData = (_a = lines.pop()) !== null && _a !== void 0 ? _a : '';
        lines.forEach(line => {
            this.push(line);
        });
        done();
    }
    _flush(done) {
        if (this._lastLineData) {
            this.push(this._lastLineData);
        }
        this._lastLineData = null;
        done();
    }
}
export default SplitLinesTransform;
