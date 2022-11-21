
<template>
    <AppProduct/>
    {{name}}
</template>

<script>
import AppProduct from '@/components/Products/AppProduct.vue';


    export default{
        name: 'App',
        components:{
            AppProduct,
        },
        setup(){
            // Nao é reativo
            const name = "Marina"

            return{
                name
            }
        }
    }
</script>

<style>
    
</style>