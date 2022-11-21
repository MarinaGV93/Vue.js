
<template>
  <AppProduct/>
  {{name}}
</template>

<script>
import AppProduct from '@/components/Products/AppProduct.vue';
import { reactive } from 'vue';


  export default{
      name: 'App',
      components:{
          AppProduct,
      },
      setup(){
          const user = reactive({
              // Dados do usuario
              first_name: 'Marina',
              last_name: 'GV'
          })
          // Nao é reativo
          const name = "Marina"

          return{
              name,
              user,
          }
      }
  }
</script>

<style>
  
</style>