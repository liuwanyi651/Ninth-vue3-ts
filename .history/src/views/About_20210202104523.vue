<template>
 <div>
    这是aboutt页面
    {{num}}
 </div>
</template>

<script lang="ts">
import {defineComponent,onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import api from 'vue-router'
 export default defineComponent({
   name: 'about',
   props: {
   },
   components: {

   },
   setup() {
    let route =useRoute() //this.$router
    let num = ref<number>(0)
   onMounted(()=>{
     num.value =Number(route.query.num)
   })
   return {
     num
   }
   }
 })
</script>

<style scoped lang='scss'>

</style>