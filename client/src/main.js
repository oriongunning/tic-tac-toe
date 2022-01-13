import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// import styles
import "@/scss/site.scss";

// IMPORT LAYOUTS
import Default from "./layouts/Default";
Vue.component('default_layout', Default);

// START SOCKET IO
console.log('https://tictactoe-vuejs.herokuapp.com');
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: false,
  //connection: window.location+':5000',
  connection: 'https://tictactoe-vuejs.herokuapp.com:'+process.env.PORT,
  //connection: 'https://tictactoe-vuejs.herokuapp.com',
  //connection: 'http://localhost:5000',
  options: {
    'reconnectionDelay': 1000,
    'reconnectionDelayMax' : 5000,
    'reconnectionAttempts': 1
  }
}));

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
