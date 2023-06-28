import stream, { TransformCallback } from 'stream';
import mergeStrArrays from './utils/merge-sorted-arrays.js';

class AccumulatorTransform extends stream.Transform {
  _accumulator: string[] = [];

  override _transform(wordsStr: any, _encoding: BufferEncoding, done: TransformCallback) {
    const words = String(wordsStr).split(' ');
    this._accumulator = mergeStrArrays(this._accumulator, words);

    done();
  }

  override _flush(done: any) {
    this._accumulator.forEach(word => {
      this.push(word);
    });

    done();
  }
}

export default AccumulatorTransform;
