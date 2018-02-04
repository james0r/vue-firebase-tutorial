// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxy2gxZZ8YbNxwQJo-tkz48y5UXSY2k1o",
    authDomain: "vue-firebase-tutorial-123.firebaseapp.com",
    databaseURL: "https://vue-firebase-tutorial-123.firebaseio.com",
    projectId: "vue-firebase-tutorial-123",
    storageBucket: "",
    messagingSenderId: "552763223239"
  };
  firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
