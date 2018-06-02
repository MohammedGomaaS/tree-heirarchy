// Initializes the `parentsOf` service on path `/parents-of`
const createService = require('./parents-of.class.js');
const hooks = require('./parents-of.hooks');

module.exports = function (app) {
  
  const seq = app.get('sequelizeClient');

  const options = {
   seq
  };

  // Initialize our service with any options it requires
  app.use('/parentsOf', createService(options));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('parentsOf');

  service.hooks(hooks);
  
};
