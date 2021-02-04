<template>
  {{num}}
</template>

<script lang="ts">
// 按需引入
import {defineComponent,ref} from 'vue'
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
    // ref只能定义单个数据
    // 泛型
    let num = ref<number>(0)


    // 所有定义的数据和方法必须return setup(){}这个函数是有返回值的
    return{
      num
    }
  }
})
</script>

<style scoped lang="scss">
  
</style>