import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from "./vuex/store"
import Star from './components/Star/Star.vue'
import {Button} from 'mint-ui'

import 'lib-flexible'
import './validate'
import * as API from '@/api'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.prototype.$API = API

Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component(Button.name,Button)

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
