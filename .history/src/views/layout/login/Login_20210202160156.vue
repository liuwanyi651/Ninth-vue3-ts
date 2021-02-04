<template>
 <div>
    我是登录页
 </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import api from '@/http/api'
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
   setup() {
     let data = ref<any>()
   api.banners().then((res: any)=>{
     data = res.data
     console.log(data)
   })

   return {}
   }
 })
</script>

<style scoped lang="scss">

</style>