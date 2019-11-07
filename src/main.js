import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/reset.css'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.prototype.qs = Qs;

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
