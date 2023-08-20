import path from 'path';
import fs from 'fs';

const start = '|';
const branch = '____';

export const buildPrefix = (depth: number) => {
  if (depth < 2) return '';

  const length = branch.length * (depth - 1.5);
  const space = Array.from({ length }, () => ' ').join('');

  return `${start}${space}`;
};

export const buildBranch = (value: string, depth: number) => {
  const ending = `${value}\n`;

  if (!depth) return ending;

  const core = `${start}${branch}${ending}`;
  const prefix = buildPrefix(depth);

  return `${prefix}${core}`;
};

const buildStructure = (src: string, depth = 10, currentDepth = 0): string => {
  const isDir = fs.lstatSync(src).isDirectory();
  const name = src.split(path.sep).pop() as string;
  const branch = buildBranch(name, currentDepth);

  if (!isDir || currentDepth >= depth) return branch;

  const files = fs.readdirSync(src, { encoding: 'utf-8' });

  return `${branch}${files.map(file => buildStructure(path.join(src, file), depth, currentDepth + 1)).join('')}`;
};

export default buildStructure;
