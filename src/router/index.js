import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '../components/Login.vue'
import dashBoard from '../components/dashboard.vue'
import dashBStatus from '../components/Status.vue'
import dashT1 from '../components/showT1.vue'
import dashT2 from '../components/showT2.vue'
import dashT3 from '../components/showT3.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'DashStatus',
      component: dashBStatus
    },
    {
      path: '/dashboard',
      component: dashBoard
    },
    {
      path: '/show_T1',
      component: dashT1
    },
    {
      path: '/show_T2',
      component: dashT2
    },
    {
      path: '/show_T3',
      component: dashT3
    }

  ]
})
