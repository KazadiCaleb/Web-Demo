<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Welcome To My Store 
        </p>
        <p class="subtitle">
          We Sell The best Products In The World
        </p>
      </div>
    </section>

    <div class="colum is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest Products</h2>
      </div>
    </div>
<div
    class="colum is-3"
    v-for="product in latestProducts"
    :key="product.id"
    >
<div class="box">
    <figure class="mb-2">
    <img :src="product.image" alt="">
    </figure>

    <h3 class="is-size-4">{{ product.title }}</h3>
    <p class="is-size-6 has-text-grey">R{{ product.price }}</p>
    <p class="is-size-6 has-text-grey">{{ product.description }}</p>

    <button @click="addToCart(product)">Add to Cart</button>

    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HomeView',
  data() {
    return {
      latestProducts: [],
      cart: []
    }
  },
  components: {
  },
  mounted() {
    this.getLatestProducts()
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', {
        product: this.products,
        quantity: 1
      }) 
    },
    getLatestProducts() {
      axios
       .get("https://fakestoreapi.com/products")
       .then(response => {
          this.latestProducts = response.data
        })
       .catch(error => {
          console.log(error);
        });
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
