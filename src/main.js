import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from "./vuex/store"
import Star from './components/Star/Star.vue'

import 'lib-flexible'
import './validate'
import * as API from '@/api'

Vue.config.productionTip = false

Vue.prototype.$API = API

Vue.component('Header',Header)
Vue.component('Star',Star)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
