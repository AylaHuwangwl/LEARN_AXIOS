// 对实例配置拦截器
axios.interceptors.request.use((config)=>{

  //1、开始loading操作
  //2、对原来配置进行修改（header,token/cookie）
  console.log('请求成功回调',config)
  return config
},(err)=>{
  console.log('请求失败回调',err)
  return err
})
axios.interceptors.response.use((res)=>{
  console.log(res)
  return res.data
},(err)=>{
  console.log(err)
})
axios.get('').then(res=>{
  console.log(res)
})