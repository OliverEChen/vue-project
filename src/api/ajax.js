//二次封装ajax
import axios from 'axios'
import qs from 'qs'
import { Indicator } from 'mint-ui'
import store from '../vuex/store'

const instance = axios.create({
  baseURL:'/api',
  // baseURL:'http://localhost:5000',
  timeout:4000
})

instance.interceptors.request.use((config) => {
  Indicator.open()
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  const token = store.state.token
  if(token){
    config.headers['Authorization'] = token
  }
  return config
})

instance.interceptors.response.use(
  response => {
    Indicator.close()
    return response.data
  },
  error => {
    Indicator.close()
    alert('请求出错' + error.message)
    return new Promise(() => {})
  }
)

export default instance