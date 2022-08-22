<template>
    <div>
        <pre>
            <h2>Objeto com as informações da rota:</h2>
            {{ $route }}

            <h2>Pegando o id:</h2>
            {{ $route.params.id }}

            <h2>Pegando a paginaçao:</h2>
            {{ $route.query.page }}

            <!-- Exemplo:
            http://localhost:8080/#/usuarios/20?page=5 -->
        </pre>
        Usuário

        <br>

        <h2>Redimensionamento com push:</h2>
        <button @click="login()"> 
            Login
        </button>
    </div>
</template>

<script>
    // Pegando dentro do componente
    export default{
        created (){
            console.log(this.$route);
        },
        methods: {
            login(){
                this.$router.push('/about');
                // Com obejto
                this.$router.push({name: '/about'})
                console.log('chegou');
            }
        }
    }
</script>