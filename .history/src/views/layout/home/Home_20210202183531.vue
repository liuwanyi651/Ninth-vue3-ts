<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in data" :key="index">
        <img :src="'http://157.122.54.189:9095 '+item.url" alt="" class="img">
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
.el-carousel__item  {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img{
  width: 500px;
  height: 500px;
}
</style>
