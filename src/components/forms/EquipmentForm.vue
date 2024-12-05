<template>
    <div>
        <form @submit.prevent="addNewEquipment" class="movieForm">
            <h1>Add Equipment</h1>
            <div class="txtBox">
                <label for="title">Name:</label>
                <input type="text" id="title" v-model="newEquipment.name" required />
            </div>
            <div class="txtBox">
                <label for="releaseYear">Description:</label>
                <input type="text" id="releaseYear" v-model="newEquipment.description" required />
            </div>
            <div class="txtBox">
                <label for="releaseYear">Available or In Use:</label>
                <input type="text" id="releaseYear" v-model="newEquipment.status" required />
            </div>
            <button type="submit" >Add Equipment</button>
        </form>
    </div>
</template>


<script>
import { useEquipmentStore } from '@/stores/equipmentStore';
import { mapState, mapActions } from 'pinia';


export default {
    data() {
        return {
            newEquipment: {
                name: "",
                description: "",
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

    computed: {
        ...mapState(useEquipmentStore, ['getEquipAvail'])
    },

    methods: {

        ...mapActions(useEquipmentStore, ['addNewEquipmentToDB']),

        addNewEquipment() {
            this.addNewEquipmentToDB(this.newEquipment);
            this.$router.push('/');
        },

        resetNewEquipment() {
            this.newEquipment = {
                name: "",
                description: "",
                status: ""
            }

        }
    },

    created() {
        this.resetNewEquipment;
    }


}

</script>