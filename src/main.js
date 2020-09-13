import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from "./vuex/store";

import 'lib-flexible'

Vue.config.productionTip = false
Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
