import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import NewReport from '../views/NewReport'
import NewReportLocation from '../views/NewReportLocation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'NewReport',
    component: NewReport
  },
  {
    path: '/new/location',
    name: 'NewReportLocation',
    component: NewReportLocation
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
