<template>
 <div>
    我是登录页
 </div>
</template>

<script lang>
import {defineComponent} from 'vue'
import api from '@/http/api'
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
   setup() {
   api.banners().then((res: any)=>{
     data = res.data
   })  
   return {}
   }
 })
</script>

<style scoped lang="scss">

</style>