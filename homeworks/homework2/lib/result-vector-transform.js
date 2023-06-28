import stream from 'stream';
class ResultVectorTransform extends stream.Transform {
    constructor() {
        super(...arguments);
        this._accumulator = new Map();
    }
    _transform(word, _encoding, done) {
        var _a;
        this._accumulator.set(String(word), ((_a = this._accumulator.get(String(word))) !== null && _a !== void 0 ? _a : 0) + 1);
        done();
    }
    _flush(done) {
        const resultArr = [...this._accumulator.values()];
        done(null, JSON.stringify(resultArr));
    }
}
export default ResultVectorTransform;
