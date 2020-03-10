import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import router from "./router/index";
import './registerServiceWorker'
import './assets/sass/index.sass'

import 'element-ui/lib/index.js'

import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';


import Vue from 'vue'
import App from './App.vue'
import store from './store'
import UUID from 'vue-uuid';
Vue.use(UUID);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(BootstrapVue);
// Used to communicate event between components
export const bus = new Vue();



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
