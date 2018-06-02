// Initializes the `childrenOf` service on path `/children-of`
const createService = require('./children-of.class.js');
const hooks = require('./children-of.hooks');

module.exports = function (app) {
  
  const seq = app.get('sequelizeClient');


  const options = {
    seq
  };

  // Initialize our service with any options it requires
  app.use('/childrenOf', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('childrenOf');

  service.hooks(hooks);
};
