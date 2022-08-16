<template>
  <div>
    <header class="header">
      <h1
        v-if="$slots.title"
        class="title">
        <slot name="title"/>
      </h1>
      <div class="description">
        <slot name="description"/>
      </div>
      <div class="content">
        <slot/>
      </div>
    </header> 
  </div>
</template>

<script>

// Exportando um objeto
export default {
  mounted(){
    window.addEventListener('resize', this.resize)
  
  //  Slots
   console.log(this.$slots)
  //  Acessando a descriçao
   console.log(this.$slots.description)
  },

  // Antes de ser desmontado
  beforeUnmount(){
    console.log('beforeUnmount');
    window.removeEventListener('resize', this.resize)
  },

  // Foi desmontado
  unmounted(){
    console.log('unmounted');
  },

  methods: {
    resize($evt){
      console.log($evt)
    }
  }
}
</script>

<style>
  .header{
    background-color: black;
    color: white;
  }
</style>