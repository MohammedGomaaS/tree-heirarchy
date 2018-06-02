
/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    const seq = this.options.seq;
    let node = params.query.node;


    return new Promise((resolve, reject) => {
      let query = `select  id from tree where tree.node_name = '${node}'`;
      
      seq.query(query, {  type: seq.QueryTypes.SELECT }).then((data) => {
       
        if(data.length>0){
        let id = data[0].id;
      
        let secondQuery = `SELECT *
        FROM tree_heirarchy.tree
        WHERE parent_id = ${id}`;
        
        let secondResult = {};
        seq.query(secondQuery, { raw: true, type: seq.QueryTypes.SELECT }).then((result) => {
          secondResult = result;
          let responseData=[];
          for (let i=0;i<secondResult.length;i++){
            responseData.push(secondResult[i].node_name);
          }
         
          let final = responseData;
         resolve(final);
          // consol.log("final",final)
          return final;
        });
      }
      else return resolve([]);
      });
    });
  }



}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
