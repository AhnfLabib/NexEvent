import { defineStore } from "pinia";
import { addDoc, collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/firebase/init.js";


export const useEquipmentStore = defineStore('equipment-store', {
    state: () => {
        return {
            // Data

            equipAvail: [
                "Available",
                "In Use"
            ],

            equipList: [],

            queryList: []
        }
    },

    getters: {
        // Computed properties

        getEquipAvail(state) {
            return state.equipAvail;
        },

        getAllEquipments(state) {
            return state.equipList;
        },

        getQueryList(state) {
            return state.queryList;
        }
    },

    actions: {
        // Methods

        async addNewEquipmentToDB(equipToAdd) {
            console.log('adding equip');
            await addDoc(collection(db, 'Equipment'), equipToAdd);
            this.$router.push('/');
        },

        async getAllEquipmentsFromDb() {
            this.equipList = [];
            console.log("getting equips");
            const q = query(collection(db, 'Equipment'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.equipList.push(doc.data());
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
                collection(db, 'Equipment'),
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

