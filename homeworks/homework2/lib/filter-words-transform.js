import stream from 'stream';
class FilterWordsTransform extends stream.Transform {
    _transform(line, _encoding, done) {
        const words = String(line)
            .split(/\s/)
            .map(item => item.replaceAll(/[^a-zа-яё-]/gi, ''))
            .filter(item => item !== '-');
        done(null, words.map(word => word.toLowerCase()).join(' '));
    }
}
export default FilterWordsTransform;
