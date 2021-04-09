import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase

const unsubscribe = firebase.auth().onAuthStateChanged(user => {
  store.dispatch('setUser', user)
  
  new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')

  unsubscribe()
})

