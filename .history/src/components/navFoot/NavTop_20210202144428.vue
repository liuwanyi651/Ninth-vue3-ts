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
import navHead from "../../";
import navTop from "../../components/navTop/Navtop";
import navFoot from "../../components/navFoot/Navfoot";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
