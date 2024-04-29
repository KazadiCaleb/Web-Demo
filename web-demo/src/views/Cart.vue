<template>
    <div class="colum is-multiline">
    <div class="column is-12">
      <h2 class="is-size-2 has-text-centered">Cart</h2>
    </div>
  </div>
    <div 
    class="product"
    v-for="product in cart" 
    :key="product.id">
      <p>{{ product.title }}</p>
      <img :src="product.image" alt="">
      <div>{{ product.price }}</div>
      <button @click="removeFromCart(item)">Remove</button>
  </div> 
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      latestProducts: [],
      cart: []
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  }
</script>


