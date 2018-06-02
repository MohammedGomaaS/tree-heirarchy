// Initializes the `tree` service on path `/tree`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tree.model');
const hooks = require('./tree.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tree',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tree', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tree');

  service.hooks(hooks);
};
