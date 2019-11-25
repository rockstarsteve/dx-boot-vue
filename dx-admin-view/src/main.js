import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import mock from './mock'
import './assets/icons' // icon

//TODO 不知道，查一下
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')

