// import axios from 'axios';
// axios.defaults.baseURL = 'src/data';//配置接口地址
// var qs = require('qs');
// export const newslist = params => {
//   return axios
//     .get('/newslist.json', qs.stringify(params))
//     .then(res => res.data);
// };
// export const userlist = function () {
//   return axios
//     .get('/userlist.json')
//     .then(res => res.data);
// }
import axios from 'axios';
//该文件用于交互
//1.配置接口地址
axios.defaults.baseURL='src/data'
//2.引入qs模块
var qs = require("qs")
//3声明请求接口的模块并导出
// 接口1
export const news = function(){
  return axios.get('/newslist.json').then(res => res.data);
}

//接口2
export const userlist = params => {
  return axios.get('/userlist.json',qs.stringify(params)).then(res=>res.data);
}


