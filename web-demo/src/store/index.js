import { createStore } from 'vuex';
export default createStore({
  state: {
    latestProducts: [],
    cart: []
  },
  getters: { 
   
  },
  actions: { 
    addToCart: ({commit}, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    }
  },
  modules: {

  },
  mutations: {
  ADD_TO_CART: (state, { product, quantity }) => {
    state.cart.push({
      product,
      quantity
    })
  }
}
})
