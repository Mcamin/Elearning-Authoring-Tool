import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import router from "./router/index";
import './registerServiceWorker'
import './assets/sass/index.sass'

//Element Ui dependencies
import 'element-ui/lib/index.js'

import BootstrapVue from 'bootstrap-vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import UUID from 'vue-uuid';
import Mongo from '../Server/app'

Vue.use(Mongo);
Vue.use(UUID);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(BootstrapVue);

Vue.config.productionTip = true;

// Used to communicate event between components
export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
