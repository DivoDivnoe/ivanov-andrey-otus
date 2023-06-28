import stream, { TransformCallback } from 'stream';

class SplitLinesTransform extends stream.Transform {
  _lastLineData: string | null = '';

  override _transform(chunk: any, _encoding: BufferEncoding, done: TransformCallback) {
    const data = this._lastLineData + String(chunk);
    const lines = data.split('\n');
    this._lastLineData = lines.pop() ?? '';

    lines.forEach(line => {
      this.push(line);
    });

    done();
  }

  override _flush(done: TransformCallback) {
    if (this._lastLineData) {
      this.push(this._lastLineData);
    }

    this._lastLineData = null;

    done();
  }
}

export default SplitLinesTransform;
