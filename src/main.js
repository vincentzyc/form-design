import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import '@/assets/css/base.css'
import Api from './assets/js/api';
import BaseComponents from "./components/base";
import router from './router'

Vue.config.productionTip = false

Vue.use(BaseComponents)
Vue.use(Api)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
