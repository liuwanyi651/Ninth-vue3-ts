<template>
 <div>
    首页来了
 </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import api from '@/http/api'

  // 定义数据接口
  interface Obj{
    name:string,
    path:string
  }
export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
   setup() {
    // 定义数据
    let data = ref<any>()
    // 定义数组
    let arr:Obj[]=[
       {
          name: "首页",
          path: "",
        },
        {
          name: "lv",
          path: "/whole",
        },
    ]
    // 获取首页轮播图
     api.banners().then((res: any)=>{
     data = res.data
     console.log(data)
   })
   
   return {
     data
   }
   }
 })
</script>

<style scoped lang='scss'>

</style>