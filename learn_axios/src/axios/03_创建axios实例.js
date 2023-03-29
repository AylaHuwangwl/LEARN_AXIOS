import axios from 'axios'
//创建其他实例发送请求
const insatance1 = axios.create({
  baseURL:'http://123.207.32.32:9001',
  timeout:6000,
  headers:{}
})
insatance1.get('/lyric',{
  params:{
    id:500665346
  }
}).then(res=>{
  console.log('res',res.data)
})

const insatance2 = axios.create({
  baseURL:'http://123.207.32.32:8080',
  timeout:6000,
  headers:{}
})
insatance2.get('/lyric',{
  params:{
    id:500665346
  }
}).then(res=>{
  console.log('res',res.data)
})