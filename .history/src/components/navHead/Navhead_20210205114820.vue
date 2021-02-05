<template>
  <div class="flex" style="align-items: center">
    <!--logo图片-->
    <div class="pic flex an-c">
      <img src="../../assets/logo.jpg" alt="闲云旅游" />
    </div>
    <!--循环数组-->
    <div class="ul t-center" v-for="(item, index) in arr" :key="index">
      <div
        class="li"
        @click="jump(item.path)"
        :class="item.path === route.path ? 'ac' : ' '"
      >
        {{ item.name }}
      </div>
    </div>
    <!--判断登录及未登录-->
    <div>
      <!--如果登录的情况下-->
      <div v-if="user" class="ul c-p login">
        <div class="flex a-center">
          <div>
            <el-popover
              placement="top-start"
              :width="100"
              trigger="hover"
            >
              <template #reference>
                  <div class="cute">
                    <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt="">
                  </div>
              </template>
              <div class="pd10 hov" @click="goPersonal">个人中心</div>
              <div class="pd10 hov" @click="out">退出</div>
            </el-popover>
          </div>
          <div>管理员</div>
          <div><i class="el-icon-caret-bottom"></i></div>
        </div>
      </div>
      <!--如果没有登录的情况下-->
      <div v-else class="ul lis logins" @click="goto"></div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { computed, defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

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
    // 用计算属性 拿到user 刷新依然会拿到
    const seruser = computed(()=>{
      return store.state.user 
    })
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
    ]);
    // 跳转路由
    const router = useRouter(); //相当于this.$router
    const route = useRoute();

    // 跳转到登录页面 函数 void 没有返回值
    const goto = (): void => {
      router.push("/login");
    };
    const jump = (path: string): void => {
      router.push(path);
    };
    const goPersonal = ():void =>{
      router.push("/personal")
    }
    const out = ():void =>{

    }
    return {
      arr,
      goto,
      jump,
      route,
      router,
      goPersonal,
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
  // height: 100%;
  // padding: 0 10px;
  margin-left: 2px;
  color: rgba(65, 63, 63, 0.8);
  font-size: 14px;
}
.li {
  width: 80px;
  line-height: 60px;
  height: 60px;
}
.li:hover {
  cursor: pointer;
  color: rgb(16, 121, 219);
  border-bottom: 4px solid rgb(16, 121, 219);
  box-sizing: border-box;
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
.login {
  position: absolute;
  right: 150px;
  top: 10px;
}
.ac {
  background-color: rgb(16, 121, 219);
  color: white !important;
  cursor: pointer;
}
  .cute {
            width: 40px;
            height: 40px;
            background: seagreen;
            overflow: hidden;
            border-radius:50% ;
            img {
                width: 100%;
            }
        }
.hov:hover{
  color: rgb(16, 121, 219); ;
  padding: 10px;
  background-color: rgb(247, 245, 243);
}
</style>
