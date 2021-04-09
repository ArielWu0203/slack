<template lang="pug">
v-navigation-drawer(permanent width="320" color="indigo" class="text-center")
  h2(class="white--text") Slack
  template(v-slot:append)
    div(class="pa-2")
      v-btn(block @click="logout") Logout
</template>

<script>
import firebase from 'firebase'

export default ({
  name: 'Home',
  methods: {
    logout() {
      this.$store.dispatch('setUser', null)
      firebase.auth().signOut()
      .then(()=>{
        this.$router.push('/login')
      })
    }
  }
})

</script>

