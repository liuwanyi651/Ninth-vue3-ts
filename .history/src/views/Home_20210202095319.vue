<template>
  <div>
    <!--
    {{num}}---{{str }}---{{obj}}
    {{data.name}}---{{data.age}}
    {{name}}---{{age}}
    {{num}}---{{num1}}---{{addNum}}
    <input type="text" v-model="value">
    {{value}}
    <button @click="update">改变</button>
    -->
    <button @click="goto">跳转路由</button>
  </div>
</template>

<script lang="ts">
// 按需引入
import {defineComponent,ref,reactive,toRefs,watch,watchEffect, computed} from 'vue'
// 路由需要引入两个hooks 函数
import {useRouter} from 'vue-router'



// interface Obj{
//   name:string,
//   age:number
// }

// interface Data{
//   name:string,
//   age:number
// }
export default defineComponent({
  name:'',
  props:{

  },
  components:{

  },
  // 所有的权限
  // setup 相当于 beforeCreate 和 created 这两个生命周期
  setup(){
    // 定义数据
    // 第一种方式：ref只能定义单个数据
    // 第二种方式：reactive
    // 泛型
    // let num = ref<number>(10)
    // let num1 = ref<number>(20)
    // let value = ref<string>('')
    // let str = ref<string>('abc')
    // let obj = ref<Obj>({
    //   name:'jack',
    //   age:20
    // })
        let router =useRouter() //this.$router

        let goto =():void=>{  
          // router.push('/about') //跳转路由
          router.push({
            path:'/about',
            query:{}
          })
          

        }
    // reactive 定义对象类型的数据
    // let data:Data = reactive<Data>({
    //   name:'jack',
    //   age:20
    // })
    // let update =():void =>{
    //   // 要用数据 如果是ref定义的数据 要用数据.value来访问
    //   num.value ++
    //   data.name ='tom'
    //   value.value ='123'
    //   console.log(addNum.value)
    // }
    
    // 只要用ref或者reactive定义的数据变化，就会执行watchEffect
    // watchEffect返回一个停止监听的函数
    // let stopWatchEffect= watchEffect(()=>{
    //   if(num.value === 5) stopWatchEffect()
    //   console.log('watchEffect')
    //   console.log(num.value)
    // })

    // 监听某一个或者某几个数据

    // let stopWatch=watch(()=>value.value,(val,oldVal)=>{
    //   // console.log(oldVal)
    //   // console.log(val)
    //   if(value.value === '111') stopWatch()
    //   console.log(value.value)
    // })


    // watch(()=>[value.value,num.value],(val,oldVal)=>{
    //   console.log(oldVal)
    //   console.log(val)
    // })

    // let addNum = computed(()=>{
    //   return num.value + num1.value
    // })

    // 所有定义的数据和方法必须return,setup(){}这个函数是有返回值的
    // 在template里面使用的变量才需要 return
    return{
      // num,
      // str,
      // obj,
      // ...toRefs(data),
      // num,
      // data,
      // update,
      // value,
      // addNum
      goto
    }
  }
})
</script>

<style scoped lang="scss">
  
</style>