<template>
 <div class="flex">
    <img src="../../assets/logo.jpg" alt="">
    <div v-for="(item,)">
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
    let arr = ref<Obj[]>([
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

</style>