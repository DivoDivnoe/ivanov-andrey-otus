export interface IObject {
  name: number;
  items?: IObject[];
}

const start = '|';
const branch = '____';

const buildPrefix = (depth: number) => {
  if (depth < 2) return '';

  const length = branch.length * (depth - 1.5);
  const space = Array.from({ length }, () => ' ').join('');

  return `${start}${space}`;
};

const buildBranch = (number: number, depth: number) => {
  const ending = `${number}\n`;

  if (!depth) return ending;

  const core = `${start}${branch}${ending}`;
  const prefix = buildPrefix(depth);

  return `${prefix}${core}`;
};

const buildStructure = (obj: IObject, depth = 0): string => {
  const { name, items } = obj;
  const branch = buildBranch(name, depth);

  if (items === undefined) return branch;

  return `${branch}${items.map(item => buildStructure(item, depth + 1)).join('')}`;
};

export default buildStructure;
