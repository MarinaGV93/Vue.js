// import { resolve } from 'core-js/fn/promise';
import { createStore } from 'vuex'

export default createStore({

  // Fluxo recomendado: Chamar a action, da action pra mutation e da mutation pra state

  // Estado. Onde vai guardar os dados
  state: {
    user: {
      first_name: 'Marina',
      last_name: 'Vale',
      email: 'marinasgv@hotmail.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      },
    ],
    cart: []
  },

  // Mutar os dados do state
  // Síncrona (1 de cada vez)
  mutations: {
    // O state só pode ser mudado aqui
    // Composto por funçoes
    storeUser(state, data) {
      // Antigo para o novo 
      state.user = data;
      // console.log('storeUser', data);
    },
    // Adicionar produto no carrinho
    addProduct(state, data){
      state.cart.push(data)
    },
    // Remover produto
    removeProduct(state, id){
      // Localizar o index do array
      const idx = state.cart.findIndex(obj => obj.id === id)
      state.cart.splice(idx, 1);

    }
  },
  // Pode deixar assíncrono (promise)
  actions: {
    // Conjunto de funçoes
    // data -> data q quer salvar. context -> conjunto de contexto do VUEX, tendo acesso as states, mutations, getters e outras actions
    storeUser(commit, data){
      // imprimir o total
      // console.log(context.getters.total);
      // Promise
      return new Promise((resolve) => {
        setTimeout(() => {
          // Quando acabar 3s, entra
          commit('storeUser', data);
          resolve()
        }, 3000)
      });
    }
  },
  
  getters: {
    // Conjunto de funçoes
    // Vai funcionar igual computers mas dentro do VUEX
    total(state){
      // Reduce (valor_anterior, valor_atual) = Acumulador de valores
      return state.cart.reduce((total, item => total += item.price, 0 ))
    },
  },
  // modules: {
  // }
})
