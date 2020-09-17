//二次封装ajax
import axios from 'axios'
import qs from 'qs'
import { Indicator,Toast,MessageBox } from 'mint-ui'
import store from '../vuex/store'
import router from '@/router'

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
  const token = store.state.user.token
  
  if(token){
    config.headers['Authorization'] = token
  } else {
    const needCheck = config.headers.needCheck
    if (needCheck) {
      throw new Error('没有登录,不能请求')
    }
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
    const response = error.response
    if (!response) {
      const path = router.currentRoute.path
      if (path!=='/login') {
        router.replace('/login')
        Toast(error.message)
      }
    } else {
      if (error.response.status===401) {
        const path = router.currentRoute.path
        if (path!=='/login') {
          store.dispatch('logout')
          router.replace('/login')
          Toast(error.response.data.message || '登录失效，请重新登录')
        } 
      } else if (error.response.status===404) {
        MessageBox('请求资源不存在')
      } else {
        MessageBox('请求出错' + error.message)
      }
    }
    
    return new Promise(() => {})
  }
)

export default instance