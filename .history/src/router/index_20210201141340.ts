import { createRouter, createWebHistory,createWebHashHistory,RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  // history  等同于之前的mode 路由模式
  // createWebHistory:history模式路由
  // createWebHashHistory:hash模式路由 有#、
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
