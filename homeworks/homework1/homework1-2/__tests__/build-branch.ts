import { buildBranch } from '../index';

describe('buildBranch function', () => {
  it('works correctly', () => {
    expect(buildBranch('value', 0)).toBe('value\n');
    expect(buildBranch('value', 1)).toBe('|____value\n');
    expect(buildBranch('value', 2)).toBe('|  |____value\n');
    expect(buildBranch('value', 3)).toBe('|      |____value\n');
  });
});
