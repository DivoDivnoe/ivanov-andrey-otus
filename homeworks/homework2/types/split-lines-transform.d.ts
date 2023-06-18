/// <reference types="node" />
/// <reference types="node" />
import stream, { TransformCallback } from 'stream';
declare class SplitLinesTransform extends stream.Transform {
    _lastLineData: string | null;
    _transform(chunk: any, _encoding: BufferEncoding, done: TransformCallback): void;
    _flush(done: TransformCallback): void;
}
export default SplitLinesTransform;
//# sourceMappingURL=split-lines-transform.d.ts.map