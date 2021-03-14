import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ReportList from '../views/ReportList.vue'
import Export from '../views/Export.vue'

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
  },
  {
    path: '/export',
    name: 'Export',
    component: Export
  }
]

const router = new VueRouter({
  routes
})

export default router
