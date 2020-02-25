const axios = require('axios');
const baseDomain = process.env.BASE_DOMAIN;



let http = axios.create( {
  baseURL: baseDomain,
});


let getTool =  (resource,toolID ) => {
     http.get(`/${resource}/${toolID}`)
  .then(
    res =>{
      return res.data;
    }
  ).catch(err =>{
    console.log(err);

  });
  };


module.exports = getimstool;
