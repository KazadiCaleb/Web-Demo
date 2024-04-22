<template>
  <div v-if="page === 'cart'">
    <div class="colum is-multiline">
    <div class="column is-12">
      <h2 class="is-size-2 has-text-centered">Cart</h2>
    </div>
  </div>
  <div class="products">
    <div v-for="product in cart"
    :key="product.id">
      {{ product.title }}
      <img :src="product.image" />
      <div>{{ product.price }}</div>
      <button v-on:click="removeFromCart (products)">Remove</button>
  </div>
  </div>
</div> 
</template>

<script>
export default {
  data() {
    return {
      page: "cart",
      latestProducts: [],
      cart: []
    }
  },
  components: {
  },
  methods: {
    removeFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
      console.log(this.cart);
    },
  }
}
</script>


