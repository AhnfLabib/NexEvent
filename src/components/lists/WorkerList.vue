<template>
    <div>
        <h1 class="mainTitle3">Workers</h1>
        <div class="movieLst">
            <WorkerCard v-for="worker in getAllWorkers" 
                :name="worker.name" 
                :email="worker.email"
                :role="worker.role"
                :availability="worker.availability"
            />
        </div>
    </div>
  
  
</template>

<script>
import SignInForm from '@/components/SignInForm.vue';
import { useUserStore } from '@/stores/userStore.js';
import { mapState, mapActions } from 'pinia';
import { useWorkerStore } from '@/stores/workerStore';
import WorkerCard from '../cards/WorkerCard.vue';


export default {

  components: {
      WorkerCard,
  },

  data() {
      return {
          selectedStatus: "",
      }
  },

  methods:{
      ...mapActions(useUserStore, ['userSignIn']),
      ...mapActions(useWorkerStore, ['getAllWorkersFromDb', 'queryByAvail'])
      
  },

  computed: {
      ...mapState(useUserStore, ['getSignInSuccess', 'getSignInError']),
      ...mapState(useWorkerStore, ['getAllWorkers', 'getWorkerAvail', 'getQueryList'])
  },

  created() {
      this.getAllWorkersFromDb();
  }

}

</script>
