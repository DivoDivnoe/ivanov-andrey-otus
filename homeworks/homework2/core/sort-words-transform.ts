import stream, { TransformCallback } from 'stream';
import mergeSort from './utils/merge-sorting.js';

class SortWordsTransform extends stream.Transform {
  override _transform(line: any, _encoding: BufferEncoding, done: TransformCallback) {
    const words = String(line).split(/\s/);

    done(null, mergeSort(words).join(' '));
  }
}

export default SortWordsTransform;
