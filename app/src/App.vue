<!-- TODO: Routers -->
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> 
    <!-- Com objeto -->
    <RouterLink :to="rotaDinamica">Serviços</RouterLink>
    <!-- Rota com parametro -->
    <RouterLink to="/usuarios/10">Usuário</RouterLink>
    <router-link to="/about">About</router-link>
  </nav>
  
  <!-- Onde vai renderizar (injetar) a view -->
  <router-view/>
  <!-- <RouterView/> -->
</template>

<script>
  export default{
    data(){
      return{
        rotaDinamica: {name: 'servicos'}
      }
    },
    created() {
      const newUser = {
        user: {
          first_name1: 'Mah',
          last_name1: 'GV',
          email: 'marinasgv@hotmail.com'
        },
      }
      console.log(this.$store.state.user);
      this.$store.commit('storeUser', newUser);
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
