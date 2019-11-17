import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import router from "./router/index";
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue';


import Vue from 'vue'
import App from './App.vue'
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(BootstrapVue);



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

// Using ES6 imports
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/eat_awt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
