<template>
  <div>
    <!-- {{num}}---{{str }}---{{obj}}-->
    {{data.name}}---{{data.age}}
    <button @click="update"></button>
  </div>
</template>

<script lang="ts">
// 按需引入
import {defineComponent,ref,reactive} from 'vue'

interface Obj{
  name:string,
  age:number
}

interface Data{
  name:string,
  age:number
}
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
    let num = ref<number>(0)
    // let str = ref<string>('abc')
    // let obj = ref<Obj>({
    //   name:'jack',
    //   age:20
    // })

    // reactive 定义对象类型的数据
    let data:Data = reactive<Data>({
      name:'hahaha',
      age:20
    })
    let update =():void=>{
      // 要用数据 如果是ref定义的数据 要用数据.value来访问
      num.value ++
      data.name ='xixiii'
    }
    
    // 所有定义的数据和方法必须return setup(){}这个函数是有返回值的
    return{
      num,
      // str,
      // obj,
      data,
      update
    }
  }
})
</script>

<style scoped lang="scss">
  
</style>