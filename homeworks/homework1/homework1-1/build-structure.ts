import { buildBranch } from './helpers.js';

export interface IObject {
  name: number | string;
  items?: IObject[];
}

const buildStructure = (obj: IObject, depth = 0): string => {
  const { name, items } = obj;
  const branch = buildBranch(String(name), depth);

  if (items === undefined) return branch;

  return `${branch}${items.map(item => buildStructure(item, depth + 1)).join('')}`;
};

export default buildStructure;
