import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import NewReport from '../pages/NewReport'
import NewReportLocation from '../pages/NewReportLocation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new/:reportType',
    name: 'NewReport',
    component: NewReport,
    props: true
  },
  {
    path: '/new/:reportType/location',
    name: 'NewReportLocation',
    component: NewReportLocation,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
