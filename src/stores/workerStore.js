import { defineStore } from "pinia";
import { addDoc, collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/firebase/init.js";


export const useWorkerStore = defineStore('worker-store', {
    state: () => {
        return {
            // Data

            workerAvail: [
                "Available",
                "Unavailable"
            ],

            workerList: [],

            queryList: []
        }
    },

    getters: {
        // Computed properties

        getWorkerAvail(state) {
            return state.workerAvail;
        },

        getAllWorkers(state) {
            return state.workerList;
        },

        getQueryList(state) {
            return state.queryList;
        }
    },

    actions: {
        // Methods

        async addNewWorkerToDB(workerToAdd) {
            console.log('adding worker');
            await addDoc(collection(db, 'Workers'), workerToAdd);
            this.$router.push('/');
        },

        async getAllWorkersFromDb() {
            console.log("getting workers");
            this.workerList = [];
            const q = query(collection(db, 'Workers'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.workerList.push(doc.data());
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

        async queryByAvail(selectedAvail) {
            console.log('inQuery');
            this.queryList = [];
            const q = query(
                collection(db, 'Workers'),
                where('status', 'in', selectedAvail)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id + ' -> ' + JSON.stringify(doc.data()));
                this.queryList.push(doc.data());
            });

        },

    }
})

