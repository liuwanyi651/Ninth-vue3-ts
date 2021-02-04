<template>
 <div>
   <div>

   </div>
 </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import api from '@/http/api'
import {el-carousel}
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
    let arr=ref<Obj[]>([
       {
          name: "首页",
          path: "",
        },
        {
          name: "旅游攻略",
          path: "/travelStrategy",
        },
        {
          name: "酒店",
          path: "/hotelroom",
        },
        {
          name: "国内机票",
          path: "/air",
        }  
    ])


    
    // 获取首页轮播图
     api.banners().then((res: any)=>{
     data = res.data
     console.log(data)
   })
   
   return {
     data,
     arr
   }
   }
 })
</script>

<style scoped lang='scss'>

</style>