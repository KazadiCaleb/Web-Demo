<template>
  <div>
    <h2 class="is-size-2 has-text-centered">Cart</h2>
    <ul>
      <li v-for="(product, index) in cart" :key="product.id">
        {{ product.name }} - R{{ product.price }}
        <button @click="removeFromCart(product.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['cart', 'totalPrice',])
  },
  methods: {
   ...mapActions(['removeFromCart']),
  }
};
</script>