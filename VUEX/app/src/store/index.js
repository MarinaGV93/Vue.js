import { createStore } from 'vuex'

export default createStore({
  // Estado. Onde vai guardar os dados
  state: {
    user: {
      first_name: 'Marina',
      last_name: 'Vale',
      email: 'marinasgv@hotmail.com'
    },
    products: [],
    cart: []
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  // modules: {
  // }
})
