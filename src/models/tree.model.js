// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tree = sequelizeClient.define('tree', {
    node_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, 
  {
    timestamps: false,
  },
  {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  tree.associate = function (models) {
    tree.hasMany(tree, {as: 'Parent_id',foreignKey: 'parent_id'}) 
  };

  return tree;
};
