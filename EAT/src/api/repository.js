import axios from 'axios';



const baseDomain = process.env.VUE_APP_BASE_DOMAIN;



export default axios.create( {
  baseURL: baseDomain,
  /* other custom settings */
});


