<template>
    <div>
        <form @submit.prevent="addNewWorker" class="movieForm">
            <h1>Add New Worker</h1>
            <div class="txtBox">
                <label for="title">Worker Name:</label>
                <input type="text" id="title" v-model="newWorker.name" required />
            </div>

            <div class="txtBox">
                <label for="releaseYear">Email:</label>
                <input type="text" id="releaseYear" v-model="newWorker.email" required />
            </div>

            <div class="txtBox">
                <label for="releaseYear">Role:</label>
                <input type="text" id="releaseYear" v-model="newWorker.role" required />
            </div>

            <div class="txtBox">
                <label for="releaseYear">Availability:</label>
                <input type="text" id="releaseYear" v-model="newWorker.availability" required />
            </div>
            <button type="submit" >Add Worker</button>
        </form>
    </div>
</template>


<script>
import { useWorkerStore } from '@/stores/workerStore';
import { mapActions } from 'pinia';


export default {
    data() {
        return {
            newWorker: {
                name: "",
                email: "",
                role: "",
                availability: ""
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

        ...mapActions(useWorkerStore, ['addNewWorkerToDB']),

        addNewWorker() {
            this.addNewWorkerToDB(this.newWorker);
            this.$router.push('/')
        },

        resetNewWorker() {
            this.newWorker = {
                name: "",
                email: "",
                role: "",
                availability: ""
            }

        }
    },

    created() {
        this.resetNewWorker;
    }


}

</script>