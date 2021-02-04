<template>
  <div class="flex">
    <div class="pic flex an-c">
      <img src="../../assets/logo.jpg" alt="闲云旅游" />
    </div>
    <div class="ul t-center" v-for="(item, index) in arr" :key="index">
      <div class="li"  @click="jump(item.path)">{{ item.name }}</div>
    </div>
    <div class="ul lis logins" @click="goto">登录/注册</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {useRouter} from "vue-router"
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
    // 定义数组
    const arr = ref<Obj[]>([
      {
        name: "首页",
        path: "/",
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
    ])
    // 跳转路由
    const router =useRouter() //相当于this.$router


    // 跳转到登录页面 函数 void 没有返回值
    const goto =(): void=>{
      router.push('/login')
    }
    const jump =(path:string): void=>{
      router.push(path)
    }
    return {
      arr,
      goto,
      jump
    };
  },
});
</script>

<style scoped lang="scss">
.pic {
  width: 156px;
  img {
    width: 100%;
  }
}
.ul {
  padding: 10px;
  margin-left: 2px;
  color: rgba(65, 63, 63, 0.8);
  font-size: 14px;
  line-height: 60px;
}
.li{
  box-sizing: border-box;

}
.li:hover {
  cursor: pointer;
  color: rgb(16, 121, 219);
  // color: white;
  font-weight: bold;
  // background-color:rgb(16, 121, 219) ;
  // padding:0 10px;
  border-bottom:4px solid rgb(16, 121, 219);
}
.lis:hover {
  cursor: pointer;
  color: rgb(16, 121, 219);
  font-weight: bold;
}
.active {
  color: rgb(16, 121, 219);
}
.logins {
  position: absolute;
  right: 150px;
}
.ac{
  
}
</style>
