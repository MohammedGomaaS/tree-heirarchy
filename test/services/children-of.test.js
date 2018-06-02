const assert = require('assert');
const app = require('../../src/app');

describe('\'childrenOf\' service', () => {
  it('registered the service', () => {
    const service = app.service('children-of');

    assert.ok(service, 'Registered the service');
  });
});
