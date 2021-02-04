<template>
 <div>
    这是aboutt页面
 </div>
</template>

<script>
import {defineComponent,onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
 export default defineComponent({
   name: 'about',
   props: {
   },
   components: {

   },
   setup() {
    let route =useRouter() //this.$router
    let num = ref<number>(0)
    onMounted(()=>{
      num
    })
   return {}
   }
 })
</script>

<style scoped lang='scss'>

</style>