import { createStore } from 'vuex'

export default createStore({
  // Estado. Onde vai guadar os dados
  state: {
    user: {
      first_name1: 'Marina',
      last_name1: 'Golao Vale',
      email: 'marinasgv@hotmail.com'
    },
    products: [],
    cart: []
  },

  // Mutar os dados do state
  mutations: {
    storeUser(state){
      console.log('storeUser', state);
      console.log('storeUser', state.user);
    }
  },
  actions: {
  },
  getters: {
  },
  // modules: {
  // }
})
