
/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    const seq = this.options.seq;
    let node = params.query.node;


    return new Promise((resolve, reject) => {
      let query = `select  id,parent_id from tree where tree.node_name = '${node}'`;
  
      seq.query(query, {  type: seq.QueryTypes.SELECT }).then((data) => {
       
        if(data.length>0 &&data[0].parent_id!=null){
        let id = data[0].id;
      
        let secondQuery = `select distinct a.node_name from tree_heirarchy.tree a inner join tree_heirarchy.tree  b on a.id = b.parent_id where b.id <= '${id}'`;
       
        let secondResult = {};
        seq.query(secondQuery, { raw: true, type: seq.QueryTypes.SELECT }).then((result) => {
          secondResult = result;
          let responseData=[];
          for (let i=0;i<secondResult.length;i++){
            responseData.push(secondResult[i].node_name);
          }
          
          let final = responseData;
          resolve(final);
          
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
