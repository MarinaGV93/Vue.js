<!-- Puxar todos os produtos -->
<template>
    <div>
        <AppProduto
            v-for="produto in $store.state.produtos"
            :key="produto.id"
            :produto="produto"
        />
    </div>
</template>
