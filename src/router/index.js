import Vue from 'vue';
import Router from 'vue-router';
// page components
import Home from '../pages/Home';
import Bounce from '../pages/Bounce';
import Parallax from '../pages/Parallax';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/bounce',
      name: 'Bounce',
      component: Bounce,
    },
    {
      path: '/parallax',
      name: 'Parallax',
      component: Parallax,
    },
  ],
});
