<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/contact" class="navbar-item"><strong>MY STORE</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
          <router-link to="/about" class="navbar-item">About Us</router-link>
          <router-link to="/contact" class="navbar-item">Contects</router-link>
          <router-link to="/" class="navbar-item">Products</router-link>

          <div class="navbar-item">
            <div class="button">
             <router-link to="/cart" class="button is-success">  
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart</span>
              </router-link>
            </div>
          </div>
        </div> 
      </div>
    </nav>

  <section class="section">  
   <router-view/>
  </section>

  <footer class="footer">
    <p class="has-text-centered">Copyright (c) 2024</p>
  </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    }
    }
  }
</script>

<style lang="scss">
@import"../node_modules/bulma";
</style>
