import stream, { TransformCallback } from 'stream';

class ResultVectorTransform extends stream.Transform {
  _accumulator: Map<string, number> = new Map();

  override _transform(word: any, _encoding: BufferEncoding, done: TransformCallback) {
    this._accumulator.set(String(word), (this._accumulator.get(String(word)) ?? 0) + 1);

    done();
  }

  override _flush(done: any) {
    const resultArr = [...this._accumulator.values()];

    // console.log(JSON.stringify(Object.fromEntries(this._accumulator), null, 2));

    done(null, JSON.stringify(resultArr));
  }
}

export default ResultVectorTransform;
