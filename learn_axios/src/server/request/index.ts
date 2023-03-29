import axios from "axios";
import type {AxiosInstance,AxiosRequestConfig,InternalAxiosRequestConfig,AxiosResponse} from 'axios'
class HyRequest{
  instance:AxiosInstance
  constructor(config:AxiosRequestConfig){
    // 川建实例
    this.instance = axios.create(config)
    // 每个实例都添加拦截器
    this.instance.interceptors.request.use((config1:InternalAxiosRequestConfig) => {
      console.log(config1)
      return config1
    },(err:any) => {
      console.log(err)
      return err
    })
    this.instance.interceptors.response.use((res:AxiosResponse)=>{
      console.log(res)
      return res.data
    },(err:any)=>{
      console.log(err)
      return err
    })
  }
  // 返回一个新的Promise实例（依赖第三方库的时候做一个二次封装，不再维护的时候直接修改实例就可以了）
  request(config:AxiosRequestConfig){
    return new Promise((resolve,reject)=>{
      this.instance.request(config).then((res)=>{
        resolve(res)
      }).catch((err)=>{
        reject(err)
      })
    })
  }
  // 直接返回.request实例，不推荐，到时候不再维护的时候修改麻烦
  // request1(config:AxiosRequestConfig){
  //    return this.instance.request(config)
  // }
  get(config:AxiosRequestConfig){
    return this.request({...config,method:'get'})
  }
  post(config:AxiosRequestConfig){
    return this.request({...config,method:'post'})
  }
  delete(config:AxiosRequestConfig){
    return this.request({...config,method:'delete'})
  }
}
export default HyRequest