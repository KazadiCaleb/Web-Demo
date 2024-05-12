<template>
    <div class="colum is-multiline">
    <div class="column is-12">
      <h2 class="is-size-2 has-text-centered">Cart</h2>
    </div>
  </div>
    <div 
    class="product"
    v-for="item in cart" 
    :key="item.id">
      <p>{{ item.title }}</p>
      <img :src="item.image" alt="">
      <div>{{ item.price }}</div>
      <button @click="removeFromCart(item)">Remove</button>
  </div> 
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      latestProducts: [],
      cart: [],
      item: []
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  }
</script>


