/// <reference types="node" />
/// <reference types="node" />
import stream, { TransformCallback } from 'stream';
declare class AccumulatorTransform extends stream.Transform {
    _accumulator: string[];
    _transform(wordsStr: any, _encoding: BufferEncoding, done: TransformCallback): void;
    _flush(done: any): void;
}
export default AccumulatorTransform;
//# sourceMappingURL=accumulator-transform.d.ts.map