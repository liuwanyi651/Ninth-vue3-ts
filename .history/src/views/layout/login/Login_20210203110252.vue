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
    // background-size: cover;
    position: absolute;
    background-image: url(http://157.122.54.189:9095/assets/images/th03.jfif);
}
</style>