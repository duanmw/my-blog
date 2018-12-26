import Vue from 'vue';
import './plugins/fontawesome'
import './plugins/axios'
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/iview.js'
import './iview-variables.less';
import './assets/common.css'
import animate from 'animate.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */ )
Vue.use(animate);

Vue.config.productionTip = false;
Vue.prototype.getRandomColor = function () {
    let colorArr = ["red", "magenta", "volcano", "orange",
        "gold",
        "green",
        "cyan",
        "blue",
        "geekblue",
        "purple"]
      return colorArr[Math.floor(Math.random() * colorArr.length)];
    // return this.colorArr[1]
  },
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
