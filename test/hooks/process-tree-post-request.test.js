const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const processTreePostRequest = require('../../src/hooks/process-tree-post-request');

describe('\'process-tree-post-request\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: processTreePostRequest()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
