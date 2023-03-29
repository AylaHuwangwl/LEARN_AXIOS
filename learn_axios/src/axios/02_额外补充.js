import axios from 'axios'
// 配置baseUrl
const baseURL = 'http://123.207.32.32:8080'
axios.defaults.baseURL = baseURL
axios.get('/home/multidata').then(res=>{
  console.log("res",res.data)
})
//发送多给请求
/**
   axios.all = function all(promises) {
      return Promise.all(promises);
   };
 */
axios.all([
  axios.get('/home/multidata'),
  axios.get('http://123.207.32.32:9001/lyric?id=500665346')
]).then(res=>{
  console.log(res)
})