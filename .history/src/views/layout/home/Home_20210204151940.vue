<template>
  <div>
    <!--轮播图-->
    <div class="banner p-r">
      <el-carousel indicator-position="none" height="600px" v-if="data">
        <el-carousel-item v-for="(item, index) in data" :key="index">
          <img
            :src="'http://157.122.54.189:9095' + item.url"
            alt=""
            style="height: 100%; width: 100%"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--梯形+搜索框-->
    <div class="centrebox p-a">
      <!--梯形图形-->
      <div class="flex">
        <div class="trapezoid" :class="{select:active===0}" @click="change(0)">攻略</div>
        <div class="trapezoid" :class="{select:active===1}" @click="change(1)">酒店</div>
        <div class="trapezoid" @click="air">机票</div>
      </div>
      <!--搜索输入框-->
      <div class="w500">
        <el-input>
          <template #append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "@/http/api";
import {useRouter} from "vue-router"

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    // 定义数据
    const data = ref<any>();
    const active = ref<number>(0)
    // 跳转路由
    const router = useRouter(); //相当于this.$router

    // 跳转到机票页面 函数 void 没有返回值
    const air = (): void => {
      router.push("/air");
    };
    const change=
    // 获取首页轮播图
    api.banners().then((res: any) => {
      data.value = res.data;
      console.log(data.value);
    });


    return {
      data,
      active,
      air,
      change
    };
  },
});
</script>

<style scoped lang="scss">
.banner {
  z-index: -1;
}
.centrebox {
  // width: 280px;
  // height: 150px;
  top: 300px;
  left: 550px;
  // border: 1px solid red;
}
.trapezoid {
  width: 60px;
  height: 0px;
  border-bottom: 30px solid rgba(126, 125, 125, 0.8);
  border-left: 0px solid transparent;
  border-right: 15px solid transparent;
  color: white;
  display: flex;
  justify-content: center;
  line-height: 38px;
  cursor: pointer;
}
.select{
  width: 60px;
  height: 0px;
  border-bottom: 30px solid rgba(236, 234, 234, 0.8);
  border-left: 0px solid transparent;
  border-right: 15px solid transparent;
  display: flex;
  justify-content: center;
  line-height: 38px;
}
</style>
