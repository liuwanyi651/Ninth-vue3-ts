<template>
  <div>
    <!--公共样式头部--->
    <div class="header">
      <navHead></navHead>
    </div>
    <!--公共样式内容部分--->
    <div class="main">
      <router-view></router-view>
    </div>
     <!-- 公共样式 尾部-->
    <div class="footer">
        <navFoot></navFoot> 
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import navHead from "../../components/navHead/Navhead";
import navFoot from "../../components/navFoot/NavFoot";
export default defineComponent({
  name: "",
  props: {},
  components: {
    // 注册组件
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
