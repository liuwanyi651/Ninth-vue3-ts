<template>
  <div class="bg">
    <div class="box">
      <el-card shadow="always">
        <el-tabs type="border-card">
        
          <el-tab-pane label="登录">登录</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import api from '@/http/api'
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    //    let data = ref<any>()
    //    api.banners().then((res: any)=>{
    //    data = res.data
    //    console.log(data)
    //  })

    return {
      //  data
    };
  },
});
</script>

<style scoped lang="scss">
.bg {
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(http://157.122.54.189:9095/assets/images/th03.jfif);
}
.box {
  width: 400px;
  height: 300px;
  background: white;
  border: 1px solid #ccc;
}
</style>
