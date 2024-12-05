<template>
    <div>
        <h1 class="mainTitle3">Equipments</h1>
        <div class="movieLst">
            <EquipmentCard v-for="equip in getAllEquipments" 
                :name="equip.name" 
                :description="equip.description"
                :status="equip.status"
            />
        </div>
    </div>
  
  
</template>

<script>
import SignInForm from '@/components/SignInForm.vue';
import { useUserStore } from '@/stores/userStore.js';
import { mapState, mapActions } from 'pinia';
import { useEquipmentStore } from '@/stores/equipmentStore';
import EquipmentCard from '../cards/EquipmentCard.vue';


export default {

  components: {
      EquipmentCard,
      SignInForm
  },

  data() {
      return {
          selectedStatus: "",
      }
  },

  methods:{
      ...mapActions(useUserStore, ['userSignIn']),
      ...mapActions(useEquipmentStore, ['getAllEquipmentsFromDb', 'queryByAvail'])
      
  },

  computed: {
      ...mapState(useUserStore, ['getSignInSuccess', 'getSignInError']),
      ...mapState(useEquipmentStore, ['getAllEquipments', 'getQueryList', 'getEquipAvail']),
  },

  created() {
      this.getAllEquipmentsFromDb();
  }

}

</script>
