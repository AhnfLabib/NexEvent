<template>
  <v-parallax 
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
    <div v-if="!getSignInSuccess && !getSignUpSuccess">
      <div class="centered-img-container" >
        <img src="./assets/welcomepage.png" alt="">
      </div>

      <h1 class="mainTitle2">Welcome to NexEvent</h1>
    </div>
    
    <div v-else>
      <header>
        <nav class="navBar">
          <RouterLink to="/" class="navBarEl">Dashboard</RouterLink>
          <RouterLink to="/management" class="navBarEl">Management</RouterLink>
          <RouterLink to="/about" class="navBarEl">About</RouterLink>
        </nav>
      </header>
    </div>

    <RouterView />
  </v-parallax>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { useUserStore } from '@/stores/userStore.js';
import { mapState } from 'pinia';
import DashboardView from './views/DashboardView.vue';


export default {
  components: {
    RouterLink,
    RouterView,
    DashboardView
  },

  computed: {
    ...mapState(useUserStore, ['getSignInSuccess', 'getSignUpSuccess']),
  },
}

</script>

<style scoped>

.centered-img-container {
  display: flex;
  justify-content: center; /* Horizontally centers the image */
  align-items: center;     /* Vertically centers the image */           
  margin-top: 3%;
  width: 100%;             /* Full width (or adjust to your container's width) */
}

.centered-img-container img {
  max-width: 100%;         /* Ensures the image fits within its container */
  max-height: 100%;        /* Ensures the image fits within its container */
  object-fit: contain;     /* Maintain aspect ratio while ensuring the image is fully visible */
}



</style>