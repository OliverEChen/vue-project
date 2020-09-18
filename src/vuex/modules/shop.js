//商家模块相关状态管理
import Vue from 'vue'
import {
  // RECEIVE_INFO,
  // RECEIVE_RATINGS,
  // RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SHOP
} from '../mutation-types'

import {
  // reqGoods,
  // reqInfo,
  // reqRatings,
  reqShop,
} from '@/api'

export default {
  state: {
    // goods: [],//商品列表
    // ratings: [],//商家评价列表
    // info: {},//商家信息
    shop: {},//当前商家信息
    cartFoods: [],//购物车中食品数组
  },
  mutations: {
    // [RECEIVE_INFO](state, {info}) {
    //   state.info = info
    // },
    // [RECEIVE_RATINGS](state, {ratings}) {
    //   state.ratings = ratings
    // },
    // [RECEIVE_GOODS](state, {goods}) {
    //   state.goods = goods
    // },
    [RECEIVE_SHOP](state, {shop={},cartFoods=[]}) {
      state.shop = shop
      state.cartFoods = cartFoods
    },
    [ADD_FOOD_COUNT](state, food) {
      if (food.count) {
        food.count++
      } else {
        Vue.set(food,'count',1)
        state.cartFoods.push(food)
      }
    },
    [REDUCE_FOOD_COUNT](state, food) {
      if (food.count > 0) {
        food.count--
        if (food.count===0) {
          state.cartFoods.splice(state.cartFoods.indexOf(food),1)
        }
      }
    },
    [CLEAR_CART](state){
      state.cartFoods.forEach(food => food.count = 0)
      state.cartFoods = []
    }
  },
  actions: {
    // 异步获取商家信息
    // async getShopInfo({commit}, cb) {
    //   const result = await reqInfo()
    //   if(result.code===0) {
    //     const info = result.data
    //     info.score = 3.5
    //     commit(RECEIVE_INFO, {info})

    //     typeof cb === 'function' && cb()
    //   }
    // },

    // // 异步获取商家评价列表
    // async getShopRatings({commit}, cb) {
    //   const result = await reqRatings()
    //   if(result.code===0) {
    //     const ratings = result.data
    //     commit(RECEIVE_RATINGS, {ratings})

    //     typeof cb === 'function' && cb()
    //   }
    // },

    // // 异步获取商家商品列表
    // async getShopGoods({commit}, cb) {
    //   const result = await reqGoods()
    //   if(result.code===0) {
    //     const goods = result.data
    //     commit(RECEIVE_GOODS, {goods})
    //     // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
    //     typeof cb === 'function' && cb()
    //   }
    // },

    //根据id获取对应的商家的异步action
    async getShop({commit,state}, id) {
      if (id==state.shop.id) {
        return 
      }

      if (state.shop.id) {
        commit(RECEIVE_SHOP,{})
      }
      const result = await reqShop(id)
      if(result.code===0) {
        const shop = result.data
        commit(RECEIVE_SHOP, {shop})
        // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      }
    },

    //更新food中数量的同步action
    updateFoodCount ({commit},{isAdd,food}) {
      if (isAdd) {
        commit(ADD_FOOD_COUNT,food)
      } else {
        commit(REDUCE_FOOD_COUNT,food)
      }
    }
  },
  getters: {
    // cartFoods (state) { //效率低
    //   const arr = []
    //   state.goods.forEach(good => {
    //     good.foods.forEach(food => {
    //       if (food.count > 0){
    //         arr.push(food)
    //       }
    //     })
    //   })
    //   return arr
    // }
    totalCount (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
    },
    totalPrice (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count * food.price, 0)
    },

  }
}