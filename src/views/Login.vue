<template lang="pug">
v-container(class="center")
  div(class="blue text-center py-8")
    h1(class="white--text") Slack
    span(class="white--text") Realtime communication
  div(class="text-center")
    v-btn(class="my-4" outlined color="red" @click="loginWithGoogle") Login with Google
    br
    v-btn(class="my-4" outlined color="green" @click="loginWithFB") Login with Facebook
  v-alert(type="error" v-if="hasError") {{ errors }}
  v-overlay(absolute=true :value="loading")
    v-progress-circular(indeterminate)
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      errors: null
    }
  },
  computed: {
    hasError() {
      return !!this.errors
    }
  },
  methods: {
    loginWithGoogle() {
      this.loading=true
      this.errors = null
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then((res) => {
        this.$store.dispatch('setUser', res.user)
        this.$router.push('/')
      })
      .catch((err) => {
        this.loading=false
        this.errors = err
      })
    }, 
    loginWithFB() {
      this.loading=true
      this.errors = null
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then((res) => {
        this.$store.dispatch('setUser', res.user)
        this.$router.push('/')
      })
      .catch((err) => {
        this.loading=false
        this.errors = err
      })
    }
  }
}
</script>
