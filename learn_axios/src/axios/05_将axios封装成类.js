import axios from 'axios'

class HyRequest {
  constructor() {
    this.instance = axios.create({
      baseURL: '',
      timeout: 6000,
      headers: {}
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  get(config) {
    return this.request({
      ...config,
      method: 'get'
    })
  }
  post(config) {
    return this.request({
      ...config,
      method: 'post'
    })
  }
}
const instance1 = new HyRequest()
const instance2 = new HyRequest()
export default {
  instance1,
  instance2
}