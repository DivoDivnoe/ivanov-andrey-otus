import buildStructure, { IObject } from './build-structure.js';

const mockData: IObject = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }]
    },
    {
      name: 5,
      items: [{ name: 6 }]
    }
  ]
};

console.log(buildStructure(mockData));
