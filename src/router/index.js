import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '../components/Login.vue'
import dashBoard from '../components/dashboard.vue'
import dashBStatus from '../components/Status.vue'
import dashT1 from '../components/showT1.vue'
import dashT2 from '../components/showT2.vue'
import dashT3 from '../components/showT3.vue'
import usageHD from '../components/UsageHD.vue'
import usageHW from '../components/UsageHW.vue'
import usageHM from '../components/UsageHM.vue'

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
    },
    {
      path: '/usage_History_day',
      component: usageHD
    },
    {
      path: '/usage_History_week',
      component: usageHW
    },
    {
      path: '/usage_History_month',
      component: usageHM
    }

  ]
})
