<template>
<div>
    <el-carousel indicator-position="none" height="600px" v-if="data">
    <el-carousel-item v-for="(item, index) in data" :key="index">
      <img :src="'http://157.122.54.189:9095' + item.url" alt="" style="height: 100%; width: 100%"/>
    </el-carousel-item>
    </el-carousel>
</div>
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
    const data = ref<any>();

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

<style scoped lang="scss"></style>
