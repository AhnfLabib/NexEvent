import { defineStore } from "pinia";
import { addDoc, collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/firebase/init.js";


export const useTaskStore = defineStore('task-store', {
    state: () => {
        return {
            // Data

            taskCompl: [
                "Pending",
                "Completed"
            ],

            taskList: [],

            queryList: []
        }
    },

    getters: {
        // Computed properties

        getTaskCompl(state) {
            return state.taskCompl;
        },

        getAllTasks(state) {
            return state.taskList;
        },

        getQueryList(state) {
            return state.queryList;
        }
    },

    actions: {
        // Methods

        async addNewTaskToDB(taskToAdd) {
            console.log('adding task');
            await addDoc(collection(db, 'Tasks'), taskToAdd);
            this.$router.push('/');
        },

        async getAllTasksFromDb() {
            console.log("getting tasks");
            this.taskList = [];
            const q = query(collection(db, 'Tasks'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.taskList.push(doc.data());
                console.log(doc.id + ' -> ' + JSON.stringify(doc.data()));
            });
        },

        // async queryByDuration(comparison, durationLength) {
        //     console.log('inQuery');
        //     this.queryList = [];
        //     const q = query(
        //         collection(db, 'movie-collection-256'), 
        //         where('durationHour', comparison, durationLength)
        //     );
        //     const querySnapshot = await getDocs(q);
        //     querySnapshot.forEach((doc) => {
        //         console.log(doc.id + ' -> ' + JSON.stringify(doc.data()));
        //         this.queryList.push(doc.data());
        //     });

        // },

        async queryByCompl(selectedCompl) {
            console.log('inComplQuery');
            this.queryList = [];
            const q = query(
                collection(db, 'Tasks'),
                where('availability', 'in', selectedAvail)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id + ' -> ' + JSON.stringify(doc.data()));
                this.queryList.push(doc.data());
            });

        },

    }
})

