#!/usr/bin/env node
import buildStructure from './lib/index.js';

const [src, depth] = process.argv.slice(2);

console.log(buildStructure(src, depth));
