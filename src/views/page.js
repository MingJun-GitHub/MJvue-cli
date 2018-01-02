/**
 * Created by dell on 2017/9/25.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './page2.vue';
import routerConfig from '../router/page2.js';
Vue.use(VueRouter);
var router = new VueRouter(routerConfig)
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

