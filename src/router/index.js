import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import SelectCategory from '../pages/SelectCategory'
import SelectLocation from '../pages/SelectLocation'
import ReportForm from '../pages/ReportForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'SelectCategory',
    component: SelectCategory
  },
  {
    path: '/new/location',
    name: 'SelectLocation',
    component: SelectLocation
  },
  {
    path: '/new/:category',
    name: 'ReportForm',
    component: ReportForm
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
