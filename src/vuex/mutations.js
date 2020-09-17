/* 
包含n个用于直接更新状态数据的方法的对象
方法不可以包含异步和逻辑处理代码
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_TOKEN,
  RECEIVE_USER,
  RESET_USER,
  RESET_TOKEN,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  [RECEIVE_TOKEN] (state, token) {
    state.token = token
  },
  [RECEIVE_USER] (state, user) {//可直接传数据，也可传对象{user}
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  [RESET_TOKEN] (state) {
    state.token = ''
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  
}