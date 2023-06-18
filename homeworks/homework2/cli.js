#!/usr/bin/env node
import textToVector from './lib/index.js';

const DEFAULT_ENCODING = 'utf8';
const encodingOptionsList = ['--encoding', '-e'];

const args = process.argv.slice(2);

let encoding = DEFAULT_ENCODING;
const [src, dest, encodingOption, encodingValue] = args;

if (encodingOptionsList.includes(encodingOption)) {
  encoding = encodingValue;
}

textToVector(src, dest, encoding);
