import path from 'path';
import fs from 'fs';
import { buildBranch } from './helpers';
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
