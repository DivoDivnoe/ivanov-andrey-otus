import fs from 'fs';
import { pipeline } from 'stream/promises';
import SplitLinesTransform from './split-lines-transform.js';
import FilterWordsTransform from './filter-words-transform.js';
import SortWordsTransform from './sort-words-transform.js';
import AccumulatorTransform from './accumulator-transform.js';
import ResultVectorTransform from './result-vector-transform.js';

const textToVector = async (source: string, destination: string, encoding: BufferEncoding = 'utf8') => {
  const readStream = fs.createReadStream(source, { encoding });
  const writeStream = fs.createWriteStream(destination, { encoding });

  const splitLinesStream = new SplitLinesTransform();
  const filterStream = new FilterWordsTransform();
  const sortWordsStream = new SortWordsTransform();
  const accumulatorStream = new AccumulatorTransform();
  const resultVectorStream = new ResultVectorTransform();

  await pipeline(
    readStream,
    splitLinesStream,
    filterStream,
    sortWordsStream,
    accumulatorStream,
    resultVectorStream,
    writeStream
  );

  console.log('done');
};

export default textToVector;
