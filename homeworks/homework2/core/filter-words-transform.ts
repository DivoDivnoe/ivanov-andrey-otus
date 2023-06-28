import stream, { TransformCallback } from 'stream';

class FilterWordsTransform extends stream.Transform {
  override _transform(line: any, _encoding: BufferEncoding, done: TransformCallback) {
    const words = String(line)
      .split(/\s/)
      .map(item => item.replaceAll(/[^a-zа-яё-]/gi, ''))
      .filter(item => item !== '-');

    done(null, words.map(word => word.toLowerCase()).join(' '));
  }
}

export default FilterWordsTransform;
