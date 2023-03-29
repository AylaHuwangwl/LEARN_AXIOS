//  axios请求
import axios from 'axios'
// 不写methods默认是axios请求
axios.request({
  url:"http://123.207.32.32:9001/lyric?id=500665346",
  method:'get',
  // baseURL:'',
  // headers:{}
  // params:{}
  // data:{},
  // timeout:1000
}).then(res=>{
  console.log(res)
})
axios.get("http://123.207.32.32:9001/lyric",{
    params:{
      id:500665346
    }
  }
).then(res=>{
  console.log(res)
})
axios.post(
  "https://sjtest.topeye.cn/admin/common/version",
  {
    token:'8d71b574ad5b61772233b9234aef1f910f650ae7'
  }
   ).then(res=>{
  console.log(res)
})