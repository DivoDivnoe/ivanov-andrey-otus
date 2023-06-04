const start = '|';
const branch = '____';
export const buildPrefix = (depth) => {
    if (depth < 2)
        return '';
    const length = branch.length * (depth - 1.5);
    const space = Array.from({ length }, () => ' ').join('');
    return `${start}${space}`;
};
export const buildBranch = (value, depth) => {
    const ending = `${value}\n`;
    if (!depth)
        return ending;
    const core = `${start}${branch}${ending}`;
    const prefix = buildPrefix(depth);
    return `${prefix}${core}`;
};
