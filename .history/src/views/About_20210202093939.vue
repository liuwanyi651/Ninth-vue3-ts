<template>
 <div>
    这是aboutt页面
 </div>
</template>

<script>
import {defineComponent,onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
 export default defineComponent({
   name: 'about',
   props: {
   },
   components: {

   },
   setup() {
    let route =useRouter

   return {}
   }
 })
</script>

<style scoped lang='scss'>

</style>