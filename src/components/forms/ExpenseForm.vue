<template>
    <div>
        <form @submit.prevent="addNewExpense" class="movieForm">
            <h1>Add Expense</h1>
            <div class="txtBox">
                <label for="title">Where was it spent:</label>
                <input type="text" id="title" v-model="newExpense.name" required />
            </div>
            <div class="txtBox">
                <label for="rating">Amount:</label>
                <input type="number" placeholder="$0" id="rating" v-model="newExpense.amount" required />
            </div>
            <button type="submit" >Add Expense</button>
        </form>
    </div>
</template>


<script>
import { useExpenseStore } from '@/stores/expenseStore';
import { mapActions } from 'pinia';


export default {
    data() {
        return {
            newExpense: {
                name: "",
                amount: ""
            },

            // newMovie: {
            //     title: "",
            //     releaseYear: "",
            //     rating: "",
            //     genre: [],
            //     durationHour: null,
            //     durationMinute: null
            // },
        }
    },

    // computed: {
    //     ...mapState(useExpenseStore, ['getEquipAvail'])
    // },

    methods: {

        ...mapActions(useExpenseStore, ['addNewExpenseToDB']),

        addNewExpense() {
            this.addNewExpenseToDB(this.newExpense);
            this.$router.push('/')
        },

        resetNewExpense() {
            this.newExpense = {
                name: "",
                amount: ""
            }

        }
    },

    created() {
        this.resetNewExpense;
    }


}

</script>