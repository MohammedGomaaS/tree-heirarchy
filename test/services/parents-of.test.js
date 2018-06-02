const assert = require('assert');
const app = require('../../src/app');

describe('\'parentsOf\' service', () => {
  it('registered the service', () => {
    const service = app.service('parents-of');

    assert.ok(service, 'Registered the service');
  });
});
