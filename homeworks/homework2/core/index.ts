import fs from 'fs';
import { pipeline } from 'stream/promises';
import url from 'url';
import SplitLinesTransform from './split-lines-transform.js';
import FilterWordsTransform from './filter-words-transform.js';
import SortWordsTransform from './sort-words-transform.js';
import AccumulatorTransform from './accumulator-transform.js';
import ResultVectorTransform from './result-vector-transform.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const textToVector = async (source: string, destination: string, encoding: BufferEncoding = 'utf8') => {
  const readStream = fs.createReadStream(__dirname + source, { encoding });
  const writeStream = fs.createWriteStream(__dirname + destination, { encoding });

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
