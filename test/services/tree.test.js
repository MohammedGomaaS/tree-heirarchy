const assert = require('assert');
const app = require('../../src/app');

describe('\'tree\' service', () => {
  it('registered the service', () => {
    const service = app.service('tree');

    assert.ok(service, 'Registered the service');
  });
});
