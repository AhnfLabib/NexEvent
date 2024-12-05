<template>
    <div>
        <h1 class="mainTitle3">Tasks</h1>
        <div class="movieLst">
            <TaskCard v-for="task in getAllTasks" 
                :title="task.title" 
                :description="task.description"
                :assignee="task.assignee"
                :status="task.status"
            />
        </div>
    </div>
  
  
</template>

<script>
import SignInForm from '@/components/SignInForm.vue';
import { useUserStore } from '@/stores/userStore.js';
import { mapState, mapActions } from 'pinia';
import { useTaskStore } from '@/stores/taskStore';
import TaskCard from '@/components/cards/TaskCard.vue';


export default {

  components: {
      TaskCard,
      SignInForm
  },

  data() {
      return {
          selectedStatus: "",
      }
  },

  methods:{
      ...mapActions(useUserStore, ['userSignIn']),
      ...mapActions(useTaskStore, ['getAllTasksFromDb', 'queryByCompl'])
      
  },

  computed: {
      ...mapState(useUserStore, ['getSignInSuccess', 'getSignInError']),
      ...mapState(useTaskStore, ['getAllTasks', 'getTaskCompl', 'getQueryList'])
  },

  created() {
      this.getAllTasksFromDb();
  }

}

</script>
