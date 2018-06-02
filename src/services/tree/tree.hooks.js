
const { disallow, iff } = require('feathers-hooks-common');
const processTreePostRequest = require('../../hooks/process-tree-post-request');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processTreePostRequest()],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
