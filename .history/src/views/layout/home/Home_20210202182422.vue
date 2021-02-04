<template>
  <div class="w">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in data" :key="item">
        <div></div>{{ item.url}}</h3>
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
      data = res.data;
      console.log(data);
    });

    return {
      data,
    };
  },
});
</script>

<style scoped lang="scss">
.el-carousel__item h3 {
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
</style>
