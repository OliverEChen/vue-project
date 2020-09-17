//用户模块相关状态管理
import {
  RECEIVE_TOKEN,
  RECEIVE_USER,
  RESET_USER,
  RESET_TOKEN,
} from '../mutation-types'

import {
  reqAutoLogin,
} from '@/api'

export default {
  state: {
    user: {},//用户信息
    token: localStorage.getItem('token_key') || '', //登录标记
  },
  mutations: {
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
  },
  actions: {
    saveUser ({commit},user) {
      const token = user.token
      localStorage.setItem('token_key',token)
      delete user.token
      commit(RECEIVE_TOKEN,token)
      commit(RECEIVE_USER,user)
    },
  
    async autoLogin ({commit,state}) {
      if(state.token && !state.user._id) {
        const result = await reqAutoLogin()
        if (result.code===0) {
          const user = result.data
          commit(RECEIVE_USER,user)
        }
      } 
    },
  
    logout ({commit}) {
      localStorage.removeItem('token_key')
      commit(RESET_USER)
      commit(RESET_TOKEN)
    },
  },
  getters: {  }
}