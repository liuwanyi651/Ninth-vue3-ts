<template>
 <div class="bg">
    <div class="box"></div>
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
    height: 700px;
    // background-size: cover;
    // position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(http://157.122.54.189:9095/assets/images/th03.jfif);
}
.box {
    width: 500px;
    height: 350px;
    background: white;
    border: 1px solid #ccc;
}
</style>