import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Information from './views/Information.vue'
import Schedule from './views/Schedule.vue'
import Api from './views/Api.vue'
import Grade from './views/Grade.vue'
import Enroll from './views/Enroll.vue'
import geturl from './views/geturl.vue'
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
      path: '/geturl/:id',
      name: 'geturl',
      component : geturl,
      props: true
    },
    {
      path: '/table',
      name: 'table',
      component: () => import(/* webpackChunkName: "about" */ './views/Table.vue')
    },

  ]
})
 