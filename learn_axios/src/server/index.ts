import HyRequest from './request/index'
import { BASE_URL, TIME_OUT } from "./config";
let config = {
  baseURL:BASE_URL,
  timeout:TIME_OUT
}
const instance = new HyRequest(config)
