/**
 * Created by dell on 2017/9/25.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import routerConfig from './router/index.js'
Vue.use(VueRouter)
var router = new VueRouter(routerConfig)
new Vue({                              // eslint-disable-line
  el: '#app',
  router: router,
  render: h => h(App)
})
