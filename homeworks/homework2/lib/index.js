var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
import { pipeline } from 'stream/promises';
import SplitLinesTransform from './split-lines-transform.js';
import FilterWordsTransform from './filter-words-transform.js';
import SortWordsTransform from './sort-words-transform.js';
import AccumulatorTransform from './accumulator-transform.js';
import ResultVectorTransform from './result-vector-transform.js';
const textToVector = (source, destination, encoding = 'utf8') => __awaiter(void 0, void 0, void 0, function* () {
    const readStream = fs.createReadStream(source, { encoding });
    const writeStream = fs.createWriteStream(destination, { encoding });
    const splitLinesStream = new SplitLinesTransform();
    const filterStream = new FilterWordsTransform();
    const sortWordsStream = new SortWordsTransform();
    const accumulatorStream = new AccumulatorTransform();
    const resultVectorStream = new ResultVectorTransform();
    yield pipeline(readStream, splitLinesStream, filterStream, sortWordsStream, accumulatorStream, resultVectorStream, writeStream);
    console.log('done');
});
export default textToVector;
