import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/api.js'
import './plugins/element.js'

Vue.config.productionTip = false
// 把封装的请求对象设置为vue的$api属性
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
