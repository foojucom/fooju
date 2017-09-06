/**
 * Created by hskj on 2017/9/6.
 */
import config from './api'
import axios from 'axios'
var qs = require('qs')
axios.defaults.withCredentials = true;

/*export const getNewsList= params=>{
  return axios.get(config.getNewsList,{params:params});
}
export const saveNews=formdata=>{
  return axios.post(config.saveNews,formdata);
}
function createPostParams(obj) {
  return qs.stringify(obj);
}
export const login=data=>{
  return axios.post(config.login,createPostParams(data))
}*/
