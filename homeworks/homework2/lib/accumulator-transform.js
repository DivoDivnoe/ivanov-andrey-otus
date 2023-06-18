import stream from 'stream';
import mergeStrArrays from './utils/merge-sorted-arrays.js';
class AccumulatorTransform extends stream.Transform {
    constructor() {
        super(...arguments);
        this._accumulator = [];
    }
    _transform(wordsStr, _encoding, done) {
        const words = String(wordsStr).split(' ');
        this._accumulator = mergeStrArrays(this._accumulator, words);
        done();
    }
    _flush(done) {
        this._accumulator.forEach(word => {
            this.push(word);
        });
        done();
    }
}
export default AccumulatorTransform;
