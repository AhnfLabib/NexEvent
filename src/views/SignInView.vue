<template>
  <div v-if="!getSignInSuccess">
      <SignInForm @signIn="userSignIn"/>

      <div v-if="getSignInError" class="movieForm2">
          <p>{{ getSignInError }}</p>
      </div>
  
  </div>

  <div v-else>
      <DashboardView />
  </div>
  
  
</template>

<script>
import SignInForm from '@/components/SignInForm.vue';
import { useUserStore } from '@/stores/userStore.js';
import { mapState, mapActions } from 'pinia';
import DashboardView from './DashboardView.vue';


export default {

  components: {
      SignInForm,
      DashboardView
  },

  methods:{
      ...mapActions(useUserStore, ['userSignIn']),
      
  },

  computed: {
      ...mapState(useUserStore, ['getSignInSuccess', 'getSignInError']),
  },


}

</script>
