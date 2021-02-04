<template>
 <div class="bg">
    我是登录页
 </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
// import api from '@/http/api'
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
   setup() {
  //    let data = ref<any>()
  //    api.banners().then((res: any)=>{
  //    data = res.data
  //    console.log(data)
  //  })

   return {
    //  data
   }
   }
 })
</script>

<style scoped lang="scss">
.bg {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    background: rgb(191, 232, 245);
    background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=163570274,3634682107&fm=26&gp=0.jpg);
}
</style>