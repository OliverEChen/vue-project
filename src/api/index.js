// 接口模块
import ajax from './ajax'

export const reqAddress = (longitude,latitude) => ajax(`/position/${latitude},${longitude}`)

export const reqCategorys = () => ajax(`/index_category`)

export const reqShops = ({longitude,latitude}) => ajax(`/shops`,{params:{latitude,longitude}})
