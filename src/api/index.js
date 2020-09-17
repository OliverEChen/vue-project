// 接口模块
import ajax from './ajax'
//请求地址
export const reqAddress = (longitude,latitude) => ajax(`/position/${latitude},${longitude}`)
//获取食品分类
export const reqCategorys = () => ajax(`/index_category`,{
  headers: {
    needCheck: true
  }
})
//获取商铺列表
export const reqShops = ({longitude,latitude}) => ajax(`/shops`,{
  params:{
    latitude,
    longitude
  },
  headers: {
    needCheck: true
  }
})
// 发送短信验证码
export const reqSendCode = (phone) => ajax.get('/sendcode',{params: {phone}})
//发登陆请求，密码
export const reqPwdLogin = ({name,pwd,captcha}) => ajax.post('login_pwd',{name,pwd,captcha})
//发登陆请求，验证码
export const reqSmsLogin = ({phone,code}) => ajax.post('login_sms',{phone,code})
//自动登录请求
export const reqAutoLogin = () => ajax.get('/auto_login')
//获取goods
export const reqGoods = () => ajax('/goods')
//获取ratings
export const reqRatings = () => ajax('/ratings')
//获取info
export const reqInfo = () => ajax('/info')
