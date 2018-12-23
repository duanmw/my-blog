import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tags from './views/Tags.vue';
import Manage from './views/Manage.vue';
import Create from './views/Create.vue';
import NavMenu from './components/NavMenu.vue';
import Editor from './components/editor.vue';
// import ed from './components/ed.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      components: {
        main: Home,
        navmenu: NavMenu
      }
    },
    {
      path: '/tags',
      // name: 'tags',
      components: {
        main: Tags,
        navmenu: NavMenu
      }
    },
    {
      path: '/manage',
      // name: 'manage',
      components: {
        default: Manage,
        // navmenu: NavMenu
      }
    },
    {
      path: '/create',
      // name: 'tags',
      components: {
        // default: Create,
        default: Editor,
        // default: ed,
      }
    },
  ],
});
