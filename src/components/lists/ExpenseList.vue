<template>
    <div>
        <h1 class="mainTitle3">Expenses</h1>
        <div class="movieLst">
            <ExpenseCard v-for="exp in getAllExpense" 
                :name="exp.name" 
                :amount="exp.amount"
            />
        </div>
    </div>
  
  
</template>

<script>
import SignInForm from '@/components/SignInForm.vue';
import { useUserStore } from '@/stores/userStore.js';
import { mapState, mapActions } from 'pinia';
import { useExpenseStore } from '@/stores/expenseStore';
import ExpenseCard from '../cards/ExpenseCard.vue';


export default {

  components: {
      ExpenseCard,
      SignInForm
  },

  data() {
      return {
          selectedStatus: "",
      }
  },

  methods:{
      ...mapActions(useUserStore, ['userSignIn']),
      ...mapActions(useExpenseStore, ['getAllExpensesFromDb', 'queryByAmount'])
      
  },

  computed: {
      ...mapState(useUserStore, ['getSignInSuccess', 'getSignInError']),
      ...mapState(useExpenseStore, ['getAllExpense', 'getQueryList'])
  },

  created() {
      this.getAllExpensesFromDb();
  }

}

</script>
