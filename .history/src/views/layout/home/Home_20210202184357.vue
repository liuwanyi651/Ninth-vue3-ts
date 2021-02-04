<template>
  <el-carousel indicator-position="outside" height="600px">
    <el-carousel-item v-for="(item,index) in data" :key="index">
        <img :src="'http://157.122.54.189:9095'+ item.url" alt="" style="">
      </el-carousel-item>
  </el-carousel>
</template> 

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "@/http/api";

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    // 定义数据
    let data = ref<any>();

    // 获取首页轮播图
    api.banners().then((res: any) => {
      data.value = res.data;
      console.log(data.value);
    });

    return {
      data,
    };
  },
});
</script>

<style scoped lang="scss">


</style>
