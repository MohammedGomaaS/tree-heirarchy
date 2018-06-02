// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    console.log("context", context)
    if (context.result.lenght > 0)
      context.result = context.result[0];
    return context;
  };
};
