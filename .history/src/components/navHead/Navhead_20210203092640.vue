<template>
 <div class="flex">
    <img src="../../assets/logo.jpg" alt="">
    <div class="ul t-center" v-for="(item,index) in arr" :key="index">
      <div class="li">{{item.name}}</div>
    </div>
 </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
// 定义数据接口
interface Obj {
  name: string;
  path: string;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
   setup() {
       // 定义数组
    const arr = ref<Obj[]>([
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
      },
    ]);
   return {
       arr,
   }
   }
 })
</script>

<style scoped lang="scss">
.li{
  line-height:60px;
}
</style>