
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
      console.log("mohammed", query)
      seq.query(query, {  type: seq.QueryTypes.SELECT }).then((data) => {
        console.log("wowo",data);
        if(data.length>0){
        let id = data[0].id;
      
        let secondQuery = `SELECT *
        FROM tree_heirarchy.tree
        WHERE parent_id = ${id}`;
        console.log("mohammed2", secondQuery)
        let secondResult = {};
        seq.query(secondQuery, { raw: true, type: seq.QueryTypes.SELECT }).then((result) => {
          secondResult = result;
          let responseData=[];
          for (let i=0;i<secondResult.length;i++){
            responseData.push(secondResult[i].node_name);
          }
          console.log("www",responseData);
          let final = [responseData];
          console.log("sdaas",resolve(final));
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
