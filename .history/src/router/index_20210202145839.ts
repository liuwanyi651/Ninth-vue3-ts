import { createRouter, createWebHistory,createWebHashHistory,RouteRecordRaw } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/Layout.vue'
import home from '../views/layout/home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: layout,
    children:[
      {
        path:'/',
        name:'home',
        component:home,
        meta:{
          title:'首页'
        }
      },
    ]
  },
  {
    path:'/login',
      name:'login',
      component:()=>import('../views/login/Login.vue'),
      meta:{
        title:'登录'
      } 
  },
]

const router = createRouter({
  // history  等同于之前的mode 路由模式
  // createWebHistory:history模式路由
  // createWebHashHistory:hash模式路由 有#/
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
