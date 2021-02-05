import { createStore } from 'vuex'

export default createStore({
  // 用来定义状态(共享的数据)
  state: {
    user:{}//默认初始值
  },
  // 同步修改state 不能做异步操作 例如定时器和发请求 异步会在同步之前执行
  mutations: {
    //里面的属性都是方法
    setuser(state,data){
      state.user = localStorage.getItem
    }
  },
  actions: {
  },
  modules: {
  }
})

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   // 用来定义状态(共享的数据)
//   state: {
//     goods: [], //默认初始值
//   },
//   // 同步修改state 不能做异步操作 例如定时器和发请求 异步会在同步之前执行
//   mutations: {
//     //里面的属性都是方法
//     setGoods(state, data) {  //这个方法传入两个参数 一个state 一个data
//       state.goods = data  //每个方法里都是一句代码 把要修改的数据data赋值给初始数据state.cartgoods
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
