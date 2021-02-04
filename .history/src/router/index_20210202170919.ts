import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'
import layout from '../views/layout/Layout.vue'
import home from '../views/layout/home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: layout,
    children:[
      {
        path:'',
        name:'home',
        component:home,
        meta:{
          title:'首页'
        }
      },
      {
        path:'/login',
          name:'login',
          component:()=>import('../views/layout/login/Login.vue'),
          meta:{
            title:'登录'
          } 
      },
      {
        path:'/login',
          name:'login',
          component:()=>import('../views/layout/login/Login.vue'),
          meta:{
            title:'登录'
          } 
      },
      {
        path:'/travel',
          name:'travel',
          component:()=>import('../views/layout/login/Login.vue'),
          meta:{
            title:'登录'
          } 
      },
    ]
  },
  
   //所有路由之后最后 配置一个错误路由
  // {
  //   path:"/404",//如果我之前的都没有匹配到,就会匹配到这个*的路由
  //   component:() =>import('../views/404/404.vue')
  // }
]

const router = createRouter({
  // history  等同于之前的mode 路由模式
  // createWebHistory:history模式路由
  // createWebHashHistory:hash模式路由 有#/
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//路由守卫
// router.beforeEach((to  ,form,next) =>{
//   //动态改变浏览器的标题
//   document.title = to.meta.title
//   next()
//   let user = localStorage.getItem('user')
export default router
