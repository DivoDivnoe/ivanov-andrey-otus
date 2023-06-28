import stream from 'stream';
import mergeSort from './utils/merge-sorting.js';
class SortWordsTransform extends stream.Transform {
    _transform(line, _encoding, done) {
        const words = String(line).split(/\s/);
        done(null, mergeSort(words).join(' '));
    }
}
export default SortWordsTransform;
