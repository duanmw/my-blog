import Vue from 'vue';
import './plugins/axios'
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/iview.js'
import './iview-variables.less';
import './assets/common.css'
import animate from 'animate.css'
Vue.use(animate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');