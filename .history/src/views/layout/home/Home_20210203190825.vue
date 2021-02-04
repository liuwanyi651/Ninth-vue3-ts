<template>
  
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


</style>
