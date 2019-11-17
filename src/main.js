import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import router from "./router/index";
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue';
import EAT from "./plugins/EAT";

import Vue from 'vue'
import App from './App.vue'
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(BootstrapVue);

Vue.use(EAT);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
