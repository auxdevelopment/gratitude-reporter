import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ReportList from '../views/ReportList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reports',
    name: 'Reports',
    component: ReportList
  }
]

const router = new VueRouter({
  routes
})

export default router
