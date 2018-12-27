import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/js';
import '@/assets/css/base.css'
import "./components/base";
import store from "./store";
import router from './router'

Vue.config.productionTip = false
Vue.prototype.BASE_URL = process.env.BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
