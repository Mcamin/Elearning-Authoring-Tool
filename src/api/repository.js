import axios from 'axios';
import adapter from 'axios/lib/adapters/http';


const baseDomain = 'http://localhost:3000';
const   baseUrl =  `${baseDomain}/api`;


export default axios.create( {
  baseURL: baseUrl,
  /* other custom settings */
});


