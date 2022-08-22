<template>
  <div>
    <h1>Hello World</h1>
    {{name4}}
  </div>

  <br>
  
  <input 
    v-model="name4"
    type="text"
    >

  <br>

  <button @click="showHeader = false">
    Ativar e desaivar header
  </button>

  <br> 
  <hr>

  <TheHeader v-if="showHeader"/>

  <br>
  <hr>

  <!-- TODO: slot -->
  <!-- Usar o componete quando esta com slot -->
  
  <!-- Slot com nome -->
  <TheHeader>
    <template v-slot:title>
      Slot
    </template>
    <template v-slot:description>
      Slot nomeado
    </template>

    <!-- Slot sem nome -->
  <TheHeader> Slot default </TheHeader>
  </TheHeader>

  <br>
  <hr>

  <!-- TODO: Classe dinâmico -->
  <h2>Classe dinâmico:</h2>
  <div>
    <!-- Classe com variável -->
    <h3>Classe com variáve:</h3>
    <h1 :class="{'title': true, 'title-home': isHome}">
      Curso Vue 3
    </h1>

    <br>
    <hr>

    <!-- Classe com array -->
    <h3>Classe com array:</h3>
    <!-- <p :class="['text', {'text-home': isHome}]"> -->
    <p :class="pClass">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium minus cupiditate officia, nisi ipsa repudiandae quaerat accusantium delectus laborum dignissimos molestias neque ab! Ducimus officia, cupiditate minima tempora voluptas similique?
    </p>
  </div>

  <br>
  <hr>

  <!-- TODO: Style dinâmico -->
  <div>
    <h2>Style dinâmico:</h2>
    <!-- <p :style="{'color': 'aqua', 'background-color': 'black'}"> -->
    <p :style="styleClass">  
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure, quas quisquam tenetur nisi eaque, modi maiores animi expedita obcaecati repellat dolor est repudiandae maxime qui sit nemo, exercitationem perferendis.
    </p>
  </div>

  <br>
  <hr>

  <!-- TODO: v-show -->
  <div>
    <h2>v-show:</h2>
    <div v-show="showName">
      Nome: {{firstName}} <br>
      Sobrenome: {{lastName}}
    </div>
  </div>

  <br>
  <hr>

  <!-- TODO: v-if/v-else-if/v-else -->
  <div>
    <h2>v-if/v-else-if/v-else:</h2>
    <div v-if="accessLevel === 'admin'"> Usuário admin</div>
    <div v-else-if="accessLevel === 'marketing'">Usuário marketing</div>
    <div v-else>Usuário normal</div>
  </div>
  
  <br>
  <hr>

  <!-- TODO: v-for -->
  <div>
    <h2>v-for:</h2>
    <div v-for="(obj, index) in todos"
      v-bind:key="obj.id"
      class="todos-item">

    <img 
        v-if="obj.imgSrcc"
        :src="obj.imgSrcc">

      {{index}} - {{obj.title}}
    </div>
  </div>

  <br>
  <hr>

  <!-- TODO: v-bind -->
  <div>
    <h2>v-bind:</h2>
    <img 
      v-bind:src="imgSrc" 
      v-bind:alt="imgAlt">

  </div>

  <br>
  <hr>

  <!-- TODO: v-mode -->
  <div>
  <h2>v-mode:</h2>
    <div>
      <input 
        v-model="name"
        type="text">
    </div>

    <br>

    <div>
      <input 
        v-model="name1"
        type="text">
        <br>
        {{name1}}
    </div>

    <br>

    <div>
      <label>Esportes</label><br>
      <select v-model="sports">
        <option value="">Escolha</option>
        <option value="futebol">Futebol</option>
        <option value="skate">Skate</option>
        <option value="tenis">Tênis</option>
      </select>
      {{sports}}
    </div>

    <br>

    <div>
      <label>Newsletter:</label><br>
      <input 
        v-model="newsletter"
        type="radio"
        value="Sim"
      >Sim
      <input 
        v-model="newsletter"
        type="radio"
        value="Não"
      >Não

      {{newsletter}}
    </div>
    
    <br>

    <div>
      <label>Contrato:</label><br>
      <input 
        v-model="contrato"
        type="checkbox"
      >Aceita nossos termos...

      <br>

      {{contrato}}
    </div>
    
    <br>

    <div>
      <label>Cores favoritas:</label><br>
      <input 
        v-model="cores"
        type="checkbox"
        value="Azul"
      >Azul

       <input 
        v-model="cores"
        type="checkbox"
        value="Amarelo"
      >Amarelo

      <br>

      {{cores}}
    </div>
  </div>

  <br>
  <hr>

  <!-- TODO: Eventos -->
  <div>
    <div>
      <h2>Eventos:</h2>
      <button @click.once="onClick">
        Enviar
      </button>
    </div>

    <br>

    <div @mouseover="onMouseOver"
        @mouseout="onMouseOut">
      Mouse Over
    </div>

    <br>

    <form 
      action="https://google.com"
      @submit.prevent="onSubmit">
      <button type="submit">
        Enviar
      </button>
    

    <br>

      <input 
        type="text"
        @keyup.enter="onKeyUp">
    </form>
  </div>

  <br>
  <hr>

  <!-- TODO: Propriedades computadas -->
  <div>
    <h2>Propriedades computadas:</h2>
    <div>
      {{fullName}}
    </div>

    <br>

  <!-- So exibir as TODOS que nao foram completadas -->
  
    <h3>TODOS em aberto:</h3>
    <div
      v-for="todo in uncompletedTodos"
      :key="todo.id">
      {{todo.title}} 
      <!-- <span>{{todo.completed}}</span> -->
    </div>

    <br>

    <h3>TODOS completas:</h3>
    <div
      v-for="todo in completedTodos"
      :key="todo.id">
      {{todo.title}} 
      <!-- <span>{{todo.completed}}</span> -->
    </div>

    <br>

    <h3>TODOS:</h3>
    <div
      v-for="todo in todos"
      :key="todo.id">
    <input
      v-model="todo.completed"
      type="checkbox"
    >
      {{todo.title}}
    </div>
  </div>

  <br>
  <hr>

  <!-- TODO: Observadores - Watch -->
  <div>
    <h2>Observadores - Watch:</h2>
    <input 
      v-model="name2"
      type="text"
    >
    <br>
    {{name2}}

    <br><br>

  <!-- Somente quando estiver 3 letras -->
    <input 
      v-model="name3"
      type="text"
    >
    <br>
    {{name3}}

    <br><br>

    <!-- Quando usar paginaçao -->
    <select v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
    <br>
    {{pageCount}}

    <br><br>

    <input 
      v-model="user.first_name"
      type="text"
    >
    <input 
      v-model="user.last_name"
      type="text"
    >
    <br>
    {{user.first_name}} {{user.last_name}}



  </div>

  <br>
  <hr>

  <!-- TODO: Scoped e global CSS -->
  <div>
    <BaseCard/>
  </div>

  <br>
  <hr>

  <!-- TODO: Enviando dados para o componente filho - Props -->
  <div>
    <div>
      <!-- Com props -->
      <!-- TODO: Enviando dados do filho para o pai - emit -->
      <BaseAlert 
        v-if="showAlert"
        :variant="variant"
        :text="text"
        @close="onClose"
      />
    </div>

    <br>
    
    <!-- Com slot -->
    <div>
      <BaseAlert 
        v-if="showAlert1"
        :variant="variant1"
        :text="text"
        @close="onClose1"
      />
      <!-- {{ text }}
    </BaseAlert> -->
    </div>  
  </div>

  <br>
  <hr>

<!-- 
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import TheHeader from './components/TheHeader'
  import BaseCard from './components/BaseCard.vue'
  import BaseAlert from './components/BaseAlert.vue'

  export default {
    name: 'App',

    // TODO: Components
    components: {
      TheHeader,
      BaseCard,
      BaseAlert
    },

    data() {
      return {
        // TODO: Variáveis
        showHeader: true,
        firstName: 'Marina',
        lastName: 'Golao Vale',
        showName: true,
        accessLevel: 'admin',
        classVar: 'title',
        isHome: true,
        pClass: ['text', 'text-home'],
        name:'Marina Golao Vale',
        name1:'Marina',
        sports: '',
        // sports: 'futebol'....
        newsletter:'',
        contrato: false,
        cores: [],
        user: {
          first_name: 'Marina',
          last_name: 'Golao Vale',
        },
        name2: '',
        name3: '',
        pageCount: 5,
        name4: 'Marina',
        variant: 'success',
        variant1: 'danger',
        text: 'Seu formulário foi enviado com sucesso!',
        showAlert: true,
        showAlert1: true,

        // styleClass: {'color': 'aqua', 'background-color': 'black'},
        styleClass: {color: 'aqua', backgroundColor: 'black'},

        // TODO: Array de objetos
        todos:
        [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false,
            imgSrcc: 'https://via.placeholder.com/150'
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false,
            imgSrcc: 'https://via.placeholder.com/150'
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
          {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
          }
        ],
        
      // TODO: Imagem dinâmica
        imgAlt: "Foto de Marina",
        imgSrc: "https://via.placeholder.com/150"
      }
    },
<<<<<<< HEAD
    created() {
      const newUser = {
        user: {
          first_name1: 'Mah',
          last_name1: 'GV',
          email: 'marinasgv@hotmail.com'
        },
      }
<<<<<<< Updated upstream
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
=======
      console.log(this.$store.state.user);
      this.$store.commit('storeUser', newUser);
    }
=======

    // TODO: Funções
    methods: {
      onClick($evt){
        console.log('click', $evt)
      },
      onMouseOver($evt){
        console.log('mouse over', $evt)
      },
      onMouseOut($evt){
        console.log('mouse out', $evt)
      },
      onSubmit($evt){
        console.log('submit', $evt)
      },
      onKeyUp($evt){
        console.log('onKeyUp', $evt)
      },

      saveUserName(){
        console.log(this.name2)
      },
      saveUserName1(){
        console.log(this.name3)
      },
      changePage(){
        console.log('Ajax');
      },

      onClose(){
        this.showAlert = false
        console.log('fechado')
      },
      onClose1(){
        this.showAlert1 = false
        console.log('fechado')
      },
    },

    // TODO: Computed
    computed: {
      fullName(){
        return `${this.user.first_name} ${this.user.last_name}`
      },

      uncompletedTodos(){
        return this.todos.filter(todo => !todo.completed);
      },

      completedTodos(){
        return this.todos.filter(todo => todo.completed);
      },
    },

    //TODO: Watch
    watch: {
      name2(/*newValue, oldValue*/){
        // console.log(newValue, oldValue)
        this.saveUserName()
      },
      // Somente quando estiver 3 letras
      name3(nv){
        if (nv.length >= 3){
          this.saveUserName1()
        }
      },
      pageCount(){
        this.changePage();
      },

      // Transformar em objeto
      user:{
        // Quando o objeto se alterar (user), execute
        handler(){
          console.log('User alterado')
        },
        // Quando qualquer coisa do obj se alterar, dispara o handler
        deep: true
      }
    },

    // // TODO: Ciclo de vida
    // // Antes de ser criado
    // beforeCreate(){
    //   console.log('beforeCreate');
    // //  Nao tem acesso
    //  console.log('Estado: ',this.name4);
    //  console.log('DOM: ', this.$el);
    // },

    // // Foi criado
    // created(){
    //   console.log('created');
    //   console.log('Estado: ', this.name4);
    //   console.log('DOM: ', this.$el);
    // },

    // // Antes de ser montado
    // beforeMount(){
    //   console.log('beforeMount');
    //   console.log('Estado: ', this.name4);
    //   console.log('DOM: ', this.$el);
    // },

    // // Foi montado
    // mounted(){
    //   console.log('mounted');
    //   console.log('Estado: ',this.name4);
    //   console.log('DOM: ', this.$el);
    // },

    // // Antes de atualizar
    // beforeUpdate(){
    //   console.log('beforeUpdate', this.name4);
    // },

    // // Foi atualizado
    // updated(){
    //   console.log('updated', this.name4);
    // },
  }
>>>>>>> parent of 4eaf00d (Router)
>>>>>>> Stashed changes
</script>

<style>

  .title{
    font-size: 40px;
    color: blue;
  }

  .title-home{
      font-size: 60px;
      color: green;
    }

  .text{
    color: yellow;
  }

  .text-home{
    color: blueviolet;
  }

  .todos-item{
    background-color: black;
    margin: 0 0 5px 0;
    padding: 3px 6px;
    color: white;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
 