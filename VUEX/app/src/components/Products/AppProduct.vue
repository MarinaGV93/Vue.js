<!-- Exibir apenas 1 produto -->
<template>
    <div>
        <pre>
            {{ produto.name }} - {{produto.price}} <br>
        <!-- Colocar o produto no carrinho com o mutation -->
        <button @click="addProduct()">
            Adicionar
        </button>
        <!-- Só remover se tiver produto -->
        <button @click="removeProduct()">
            Remover
        </button>
        </pre>
    </div>
</template>

<script>
    export default{
        props: {
            produto: Object
        },
        methods: {
            addProduct(){
                // Criar uma mutation commit direto pro store
                this.$store.commit('addProduct', this.produto)
            },
            removeProduct(){
                // Criar uma mutation commit direto pro store
                this.$store.commit('removeProduct', this.produto.id)
            },
        }
    }
</script>

<style>
    .card{
        background: bisque;
        padding: 6px;
        margin-bottom: 5px;
    }
</style>