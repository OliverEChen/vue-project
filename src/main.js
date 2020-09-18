import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from "./vuex/store"
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import 'lib-flexible'
import './validate'
import * as API from '@/api'
import i18n from './i18n'
import './mock/mock-server'
import loading from '@/common/images/loading.gif'
import './filters/'

Vue.config.productionTip = false

Vue.prototype.$API = API

Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
Vue.component('Split', Split)
Vue.component(Button.name,Button)

Vue.use(VueLazyload, {
  loading,
})

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
