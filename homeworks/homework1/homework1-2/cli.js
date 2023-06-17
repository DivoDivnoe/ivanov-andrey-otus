#!/usr/bin/env node
import buildStructure from './lib/index.js';

const DEFAULT_DEPTH = 10;
const depthOptionsList = ['--depth', '-d'];

const args = process.argv.splice(2);

let depth = DEFAULT_DEPTH;
const [src, depthOption, depthValue] = args;

if (depthOptionsList.includes(depthOption)) {
  depth = Number(depthValue);
}

console.log(buildStructure(src, depth));
