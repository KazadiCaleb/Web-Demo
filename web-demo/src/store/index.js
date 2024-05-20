import { createStore } from 'vuex';
export default createStore({
  state: {
    latestProducts: [],
    cart: []
  },
  getters: { 
   
  },
  actions: { 
    addProductToCart: ({commit}, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })


    },
    removeProductFromCart: ({commit}, product) => {
      commit('REMOVE_Product_FROM_CART', product);
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
  },
  REMOVE_PRODUCT_FROM_CART: (state, { product, quantity}) => {
    state.cart.remove({ product, quantity })
     
  }
}
})
