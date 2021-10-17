import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import * as firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCnbZl3sYZdv7Uld6d00zPfTFZTxlgrg9A",
  authDomain: "swimming-pool-e21e1.firebaseapp.com",
  projectId: "swimming-pool-e21e1",
  storageBucket: "swimming-pool-e21e1.appspot.com",
  messagingSenderId: "675486910407",
  appId: "1:675486910407:web:fdb6aa5af5905eee39bbe2",
  measurementId: "G-H0ZF792P7S"
};
  
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user: any) => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
