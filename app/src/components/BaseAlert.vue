<template>
    <div :class="baseClass">
        {{ text }}
    </div>

    <button @click="onClick">
        X
    </button>
</template>


<script>
export default{
    props: ['variant', 'text'],
    computed: {
        baseClass() {
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : ''  
            ]
        },
    },
    methods:{
        onClick(){
            this.$emit('close')
            console.log('clicou')
        }
    }
}
</script>

<style scoped>
.alert{
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background-color: #ddd;
}
.alert-success{
    text-align: center;
    background-color: green;
    color: white;
}

.alert-danger{
    text-align: center;
    background-color: red;
    color: white;
}
</style>
