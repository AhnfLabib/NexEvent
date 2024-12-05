<template>

    <div v-if="!getSignUpSuccess">
        <SignUpForm @signUp="userSignUp"/>
        <p v-if="getSignUpError">{{ getSignUpError }}</p>
    </div>
    
    <div v-else>
    
        <DashboardView />
    </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';
import { useUserStore } from '@/stores/userStore';
import { mapState, mapActions } from 'pinia';
import DashboardView from './DashboardView.vue';



export default {

    components: {
        DashboardView,
        SignUpForm
    },

    methods: {
        
        ...mapActions(useUserStore, ['userSignUp'])
    },

    computed: {
        ...mapState(useUserStore, ['getUserName', 'getSignUpSuccess', 'getSignUpError'])
    }


}

</script>