<template>
    <div class="colum is-multiline">
    <div class="column is-12">
      <h2 class="is-size-2 has-text-centered">Cart</h2>
    </div>
  </div>
<div
    class="colum is-3"
    v-for="item in cart"
    :key="item.id"
    >
<div class="box">
    <figure class="mb-2">
    <img :src="item.image" alt="">
    </figure>

    <h3 class="is-size-4">{{ item.title }}</h3>
    <p class="is-size-6 has-text-grey">R{{ item.price }}</p>
    <p class="is-size-6 has-text-grey">{{ item.quantity }}</p>

    <button @click="removeProductFromCart(item)">Remove</button>
    </div>
  </div> 
</template>

<script>
import HomeView from './HomeView.vue';
export default {
  name: 'Cart',
  data() {
    return {
      latestProducts: [],
      cart: []
    }
  },
  components: {
    HomeView
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch('removeProductFromCart', product);
    }
  }
  }
</script>

<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
.box {
  margin-top: 5.25rem;
  margin-left: 5.25rem;
  margin-right: 5.25rem;
}
.box {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  width: 90%;
  max-width: 1000px;
  margin: 10vh auto;
}

.box {
  border-radius: 16px;
  box-shadow: 0 30px 30px -25px rgba(#4133B7, .25);
  max-width: 500px;
}
</style>


