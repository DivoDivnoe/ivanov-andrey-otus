import path from 'path';
import fs from 'fs';
const start = '|';
const branch = '____';
const buildPrefix = (depth) => {
    if (depth < 2)
        return '';
    const length = branch.length * (depth - 1.5);
    const space = Array.from({ length }, () => ' ').join('');
    return `${start}${space}`;
};
const buildBranch = (value, depth) => {
    const ending = `${value}\n`;
    if (!depth)
        return ending;
    const core = `${start}${branch}${ending}`;
    const prefix = buildPrefix(depth);
    return `${prefix}${core}`;
};
const buildStructure = (src, depth = 10, currentDepth = 0) => {
    const isDir = fs.lstatSync(src).isDirectory();
    const name = src.split(path.sep).pop();
    const branch = buildBranch(name, currentDepth);
    if (!isDir || currentDepth >= depth)
        return branch;
    const files = fs.readdirSync(src, { encoding: 'utf-8' });
    return `${branch}${files.map(file => buildStructure(path.join(src, file), depth, currentDepth + 1)).join('')}`;
};
export default buildStructure;
