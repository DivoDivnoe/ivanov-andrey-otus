import { buildPrefix } from '../index';

describe('buildPrefix function', () => {
  it('works correctly', () => {
    expect(buildPrefix(1)).toBe('');
    expect(buildPrefix(0)).toBe('');
    expect(buildPrefix(2)).toBe('|  ');
    expect(buildPrefix(3)).toBe('|      ');
  });
});
