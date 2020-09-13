//二次封装ajax
import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL:'/api',
  // baseURL:'http://localhost:5000',
  timeout:4000
})

instance.interceptors.request.use((config) => {
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

instance.interceptors.response.use(
  response => {

    return response.data
  },
  error => {
    alert('请求出错' + error.message)
    return new Promise(() => {})
  }
)

export default instance