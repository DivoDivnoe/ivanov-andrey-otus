/// <reference types="node" />
/// <reference types="node" />
import stream, { TransformCallback } from 'stream';
declare class ResultVectorTransform extends stream.Transform {
    _accumulator: Map<string, number>;
    _transform(word: any, _encoding: BufferEncoding, done: TransformCallback): void;
    _flush(done: any): void;
}
export default ResultVectorTransform;
//# sourceMappingURL=result-vector-transform.d.ts.map