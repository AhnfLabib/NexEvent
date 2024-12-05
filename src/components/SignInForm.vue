<template>
    <h1 class="mainTitle">Sign In</h1>


    <div class="movieForm">
        <div class="txtBox">
            <label for="signInEmail">Email:</label>
            <input type="email" v-model="signInEmail" id="signInEmail">
        </div>
        <div class="txtBox">
            <label for="signInPassword">Password:</label>
            <input type="password" v-model="signInPassword" id="signInPassword">
        </div>

        <div class="buttonDiv">
            <button @click="signIn">Sign In</button>
            <button @click="signUpDirect">Click here if you are a new user</button>
        </div>
        
    </div>
    

</template>

<script>

export default {
    emits: ['SignIn'],

    data() {
        return {
            signInEmail: "",
            signInPassword: ""
        }
    },

    computed: {
        signInStatus() {
            if (this.signInEmail.length > 0 && this.signInPassword.length > 0) {
                return true;
            } else {
                return false;
            }
        }

    },

    methods: {
        signIn() {
            if (this.signInStatus) {
                this.$emit('SignIn', { email: this.signInEmail, password: this.signInPassword });
                console.log(this.signInPassword);
            } else {
                alert("Please fill in both fields");
            }
        },

        signUpDirect() {
            this.$router.push('/signUp')
        }
    }

}



</script>