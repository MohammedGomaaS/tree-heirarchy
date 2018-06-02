const tree = require('./tree/tree.service.js');
const parentsOf = require('./parents-of/parents-of.service.js');
const childrenOf = require('./children-of/children-of.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(tree);
  app.configure(parentsOf);
  app.configure(childrenOf);
};
