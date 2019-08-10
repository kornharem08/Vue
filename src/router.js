import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Information from './views/Information.vue'
import Schedule from './views/Schedule.vue'
import Api from './views/Api.vue'
import Grade from './views/Grade.vue'
import Enroll from './views/Enroll.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/information',
      name: 'information',
      component : Information
    },
    {
      path: '/api',
      name: 'api',
      component : Api
    },
    {
      path: '/Grade',
      name: 'Grade',
      component : Grade
    },
    {
      path: '/Enroll',
      name: 'Enroll',
      component : Enroll
    },
    {
      path: '/schedule',
      name: 'schedule',
      component : Schedule,
      props: (route) => ({
        prop1: route.query
      })
    },
    {
      path: '/table',
      name: 'table',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Table.vue')
    },

  ]
})
