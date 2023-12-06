import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import store from './store'
import './plugins/element.js'

import VueRouter from 'vue-router'
import router from './router'

// 全局引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(ElementUI);            // 引入elementui 需要 use

Vue.use(VueRouter); 
// 自定义属性
Vue.prototype.$httpUrl = 'http://localhost:8081'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
