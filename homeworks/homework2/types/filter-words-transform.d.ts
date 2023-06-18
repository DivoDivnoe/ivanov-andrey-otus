/// <reference types="node" />
/// <reference types="node" />
import stream, { TransformCallback } from 'stream';
declare class FilterWordsTransform extends stream.Transform {
    _transform(line: any, _encoding: BufferEncoding, done: TransformCallback): void;
}
export default FilterWordsTransform;
//# sourceMappingURL=filter-words-transform.d.ts.map