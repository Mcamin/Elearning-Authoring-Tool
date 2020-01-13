import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import router from "./router/index";
import './registerServiceWorker'
import dashboard from "./plugins/dashboard";
import BootstrapVue from 'bootstrap-vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import UUID from 'vue-uuid';
 
Vue.use(UUID);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(BootstrapVue);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
