<template>
  <div class="">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "@/http/api";
// 定义数据接口
interface Obj {
  name: string;
  path: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    // 定义数据
    let data = ref<any>();
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

    // 获取首页轮播图
    api.banners().then((res: any) => {
      data = res.data;
      console.log(data);
    });

    return {
      data,
      arr,
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
