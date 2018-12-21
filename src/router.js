import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tags from './views/Tags.vue';
import Manage from './views/Manage.vue';
import NavMenu from './components/NavMenu.vue';

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
        main: Manage,
        navmenu: NavMenu
      }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import( /* webpackChunkName: "about" */ './views/Manage.vue'),
    },
  ],
});
