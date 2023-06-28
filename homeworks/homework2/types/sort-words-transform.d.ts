/// <reference types="node" />
/// <reference types="node" />
import stream, { TransformCallback } from 'stream';
declare class SortWordsTransform extends stream.Transform {
    _transform(line: any, _encoding: BufferEncoding, done: TransformCallback): void;
}
export default SortWordsTransform;
//# sourceMappingURL=sort-words-transform.d.ts.map