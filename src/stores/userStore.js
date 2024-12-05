import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/init.js";


export const useUserStore = defineStore('user-store', {
    state: () => {
        return {
            // Data

            userName: "",
            signUpSuccess: false,
            signUpError: "",
            signInSuccess: false,
            signInError: "",
        }
    },

    getters: {
        // Computed properties

        getUserName(state) {
            return state.userName;
        },

        getSignUpSuccess(state) {
            return state.signUpSuccess;
        },

        getSignUpError(state) {
            return state.signUpError;
        },

        getSignInSuccess(state) {
            return state.signInSuccess;
        },

        getSignInError(state) {
            return state.signInError;
        },
    },

    actions: {
        // Methods
        async userSignUp(signUpObj) {
            console.log("Sign Up Object:", signUpObj);
            createUserWithEmailAndPassword(auth, signUpObj.email, signUpObj.password)
                .then((userCredential) => {
                    this.userName = userCredential.user.email;
                    this.signUpSuccess = true;
                    this.signUpError = "";
                    alert('Successful sign up for:' + this.userName);
                })
                .catch((error) => {
                    this.userName = "";
                    this.signUpError = error.message;
                    this.signUpSuccess = false;
                });
        },

        async userSignIn(signInObj) {
            console.log("Sign In Object:", signInObj);
            if (signInObj.email && signInObj.password) {
                signInWithEmailAndPassword(auth, signInObj.email, signInObj.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        this.signInSuccess = true;
                        console.log("BRO SIGNED");
                        this.signInError = "";
                        alert("Successful sign in for " + user.email);
                    })
                    .catch((error) => {
                        console.log(error.message);
                        this.signInError = error.message;
                        this.signInSucces = false;
                    });
            } else {
                this.signInError = "Email and password must not be empty.";
            }
        }
    }
})

