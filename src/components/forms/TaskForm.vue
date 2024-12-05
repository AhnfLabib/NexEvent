<template>
    <div>
        <form @submit.prevent="addNewTask" class="movieForm">
            <h1>Add New Task</h1>
            <div class="txtBox">
                <label for="title">Task title:</label>
                <input type="text" id="title" v-model="newTask.title" required />
            </div>

            <div class="txtBox">
                <label for="releaseYear">Describe the task:</label>
                <input type="text" id="releaseYear" v-model="newTask.description" required />
            </div>

            <div class="txtBox">
                <label for="releaseYear">Assignee:</label>
                <input type="text" id="releaseYear" v-model="newTask.assignee" required />
            </div>

            <div class="txtBox">
                <label for="releaseYear">Status:</label>
                <input type="text" id="releaseYear" v-model="newTask.status" required />
            </div>
            <button type="submit" >Add Task</button>
        </form>
    </div>
</template>


<script>
import { useTaskStore } from '@/stores/taskStore';
import { mapActions } from 'pinia';


export default {
    data() {
        return {
            newTask: {
                title: "",
                description: "",
                assignee: "",
                status: ""
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

        ...mapActions(useTaskStore, ['addNewTaskToDB']),

        addNewTask() {
            this.addNewTaskToDB(this.newTask);
            this.$router.push('/')
        },

        resetNewTask() {
            this.newTask = {
                title: "",
                description: "",
                assignee: "",
                status: ""
            }

        }
    },

    created() {
        this.resetNewTask;
    }


}

</script>