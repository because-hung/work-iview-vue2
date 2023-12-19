import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import Scrollspy from 'vue2-scrollspy'
// use default options
Vue.use(Scrollspy)

Vue.use(Vant)

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
