#!/usr/bin/env node
import yargs from 'yargs/yargs';
import fs from 'fs';
import path from 'path';
import { hideBin } from 'yargs/helpers';
import textToVector from './lib/index.js';

const DEFAULT_ENCODING = 'utf8';

const { argv } = yargs(hideBin(process.argv))
  .version('1.0.0')
  .usage('Usage: $0 -s src -d dest -e utf-8')
  .option('s', {
    alias: 'src',
    describe: 'text file src path',
    demandOption: 'file source path is required',
    type: 'string'
  })
  .option('d', {
    alias: 'dest',
    describe: 'text file output path',
    demandOption: 'file output path is required',
    type: 'string'
  })
  .option('e', { alias: 'encoding', describe: 'text encoding format', default: DEFAULT_ENCODING, type: 'string' })
  .check(argv => {
    if (!fs.existsSync(argv.src)) {
      throw new Error('Argument check failed: src is not a readable file');
    }

    return true;
  })
  .help();

textToVector(path.resolve(argv.src), path.resolve(argv.dest), argv.encoding);
