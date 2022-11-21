<template>

  {{name}}

  <br>

  <h5>User:</h5>

  {{user.first_name}}
  {{user.last_name}}

  <br>

  <h5>Admin:</h5>

  {{admin.first_name}}
  {{admin.last_name}}

  <br>

  <img 
    @click="changeName()"
    alt="Vue logo" 
    src="./assets/logo.png"
  >
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import { ref, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default{
      name: 'App',
      components:{
        HelloWorld,
      },

      setup(){

        // Reativo
          const user = reactive({
              // Dados do usuario
              first_name: 'Marina',
              last_name: 'GV'
          })

        // Com REF
        const admin = ref({
          // Dados do usuario
            first_name: 'Admin',
            last_name: 'Master'
        })
        
        // Nao é reativo
          let name = "Marina"

          const changeName = () => {
            alert('chegou')
            // Não é reativo
            name = 'Marina Golao Vale'
            
            // É reativo
            user.first_name = 'Mah'
            // Com REF
            admin.value.first_name = 'Mah'
          }
        
          

          return{
              name,
              user,
              admin,
          }
      }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
