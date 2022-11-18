<template>

  {{$store.getters.total}}
  
  <AppProdutos/>
  
  <br>

  <!-- Para aparecer oq aconteceu na tela -->

  <pre>
    {{ $store.state.cart }}

    <!-- Quantos itens que foram adicionado -->
    <br>
    {{ $store.state.cart.length }}
  </pre>

  <br>

  {{$store.state.user.first_name}} {{$store.state.user.last_name}}
 
  <br>
   
  <button @click="updateUser">
    Atualizar perfil
  </button>

</template>

<script>
import AppProdutos from './components/Produtos/AppProdutos.vue';

export default {
  name: 'App',
  components: {
    AppProdutos
},
  data() {
    return {

    }
  },
  methods: {
    updateUser(){
      const newUser = {
        first_name: 'Marina',
        last_name: 'Golao Vale',
        email: 'marinasgv@hotmail.com'
      }
    // this.$store.commit('storeUser', newUser);
    // dispatch -> acionar as actions
    this.$store.dispatch('storeUser', newUser).then(() => {
      // Quando usa o promise
      console.log('terminou com sucesso');
    })
    }
  },
  // Debugar
  created() {
    // Pegar o state
    console.log('App', this.$store.state.user);
    // 1º - nome da funçao que quer da mutation
    // 2º - dado que quer atualizar
    // const newUser = {
    //   first_name: 'Marina',
    //   last_name: 'Golao Vale',
    //   email: 'marinasgv@hotmail.com'
    // }
    // this.$store.commit('storeUser', newUser);
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
