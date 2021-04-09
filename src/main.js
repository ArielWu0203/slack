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
  apiKey: "AIzaSyDSm3T3Lq51IKrj6ZplvVHTqvwQnv5E4Cs",
  authDomain: "vueslack-9a364.firebaseapp.com",
  projectId: "vueslack-9a364",
  storageBucket: "vueslack-9a364.appspot.com",
  messagingSenderId: "198112836455",
  appId: "1:198112836455:web:34078e0982c82a0cad0dc2",
  measurementId: "G-XJJF6FS3SJ"
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

