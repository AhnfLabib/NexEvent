import { defineStore } from "pinia";
import { addDoc, collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/firebase/init.js";


export const useExpenseStore = defineStore('expense-store', {
    state: () => {
        return {
            // Data

            // equipAvail: [
            //     "Available",
            //     "Unavailable"
            // ],

            expList: [],

            queryList: []
        }
    },

    getters: {
        // Computed properties

        // getEquipAvail(state) {
        //     return state.equipAvail;
        // },

        getAllExpense(state) {
            return state.expList;
        },

        getQueryList(state) {
            return state.queryList;
        }
    },

    actions: {
        // Methods

        async addNewExpenseToDB(expToAdd) {
            console.log('adding expense');
            await addDoc(collection(db, 'Expenses'), expToAdd);
            this.$router.push('/');
        },

        async getAllExpensesFromDb() {
            console.log("getting exps");
            this.expList = [];
            const q = query(collection(db, 'Expenses'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.expList.push(doc.data());
                console.log(doc.id + ' -> ' + JSON.stringify(doc.data()));
            });
        },

        async queryByAmount(comparison, queryAmount) {
            console.log('inQueryAmount');
            this.queryList = [];
            const q = query(
                collection(db, 'Expenses'), 
                where('amount', comparison, queryAmount)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id + ' -> ' + JSON.stringify(doc.data()));
                this.queryList.push(doc.data());
            });

        },

        // async queryByAvail(selectedAvail) {
        //     console.log('inQuery');
        //     this.queryList = [];
        //     const q = query(
        //         collection(db, 'Equipments'),
        //         where('status', 'in', selectedAvail)
        //     );
        //     const querySnapshot = await getDocs(q);
        //     querySnapshot.forEach((doc) => {
        //         console.log(doc.id + ' -> ' + JSON.stringify(doc.data()));
        //         this.queryList.push(doc.data());
        //     });

        // },

    }
})

