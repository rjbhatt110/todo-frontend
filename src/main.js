import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import material from './utils/Material'
import axios from 'axios';
import {
  LOGOUT
} from "./store/actions.type";
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

Vue.use(material)
Vue.use(Vuex)
Vue.use(Router)

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) {
    store.dispatch(LOGOUT)
  }
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')