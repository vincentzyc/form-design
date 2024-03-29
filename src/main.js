import Vue from 'vue'
import App from './App.vue'
import './plugins/quill'
import ElementUI from 'element-ui';
import Api from './api';
import Util from './utils';
import '@/assets/css/base.css'
import "./components/base";
import store from "./store";
import router from './router'

Vue.prototype.$api = Api;
Vue.prototype.$util = Util;

Vue.config.productionTip = false
Vue.prototype.BASE_URL = process.env.BASE_URL;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')