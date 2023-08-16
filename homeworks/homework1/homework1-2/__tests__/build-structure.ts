import mock from 'mock-fs';
import buildStructure from '../index';

afterEach(() => {
  mock.restore();
});

describe('buildStructure function', () => {
  it('works correctly', () => {
    mock({
      parent: {
        cluster: {
          'index.js': ''
        },
        domain: {
          'error.js': '',
          'flow.js': '',
          'run.js': ''
        },
        errors: {
          'counter.js': '',
          'try-catch.js': ''
        },
        worker: {},
        'index.js': ''
      }
    });

    expect(buildStructure(`parent`)).toEqual(
      `parent
|____cluster
|  |____index.js
|____domain
|  |____error.js
|  |____flow.js
|  |____run.js
|____errors
|  |____counter.js
|  |____try-catch.js
|____index.js
|____worker
`
    );
  });
});
