<template>
  <div>
    <!--轮播图-->
    <div class="banner p-r">
      <el-carousel indicator-position="none" height="600px" v-if="data">
        <el-carousel-item v-for="(item, index) in data" :key="index">
          <img :src="'http://157.122.54.189:9095' + item.url" alt="" style="height: 100%; width: 100%"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--梯形+搜索框-->
    <div class="centrebox p-a">
        <!--梯形图形-->
        <div class="flex">
            <div class="trapezoid"></div>
            <div></div>
            <div></div>
        </div>
        <!--搜索输入框-->
        <div></div>
    </div>
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

<style scoped lang="scss">
.banner{
  z-index: -1;
}
.centrebox{
  width: 280px;
  height: 150px;
  top:280px;
  left: 650px;
  border: 1px solid red;
}
.trapezoid{
  width: 60px;
  height: 0px;
  border-bottom:30px solid rgb(126, 125, 125) ;
}
</style>
