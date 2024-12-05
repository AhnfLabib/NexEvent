<template>
  <h1 class="mainTitle">New User Sign Up</h1>
    <div class="movieForm">
        <div class="txtBox">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="signUpEmail" />
        </div>
        <div class="txtBox">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="signUpPassword" />
        </div>

        <div class="buttonDiv">
            <button @click="signUp">Sign Up</button>
            <button @click="signInDirect">Already have an account?</button>
        </div>

    </div>

</template>


<script>


export default {
    emits: ['SignUp'],

    data() {
        return {
            signUpEmail: "",
            signUpPassword: "",
        }
    },

    computed: {
        signUpStatus() {
            if(this.signUpEmail.length > 0 && this.signUpPassword.length > 0) {
                return true;
            };
            return false;
        }
    },

    methods: {
        signUp() {
            if (this.signUpStatus) {
                this.$emit('SignUp', { email: this.signUpEmail, password: this.signUpPassword });
                console.log(this.signUpPassword);
                this.$router.push('/signUp')
            } else {
                alert("Please fill in both fields");
                
            }
        },

        signInDirect() {
            this.$router.push('/')
        }
    }


}

</script>