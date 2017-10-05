import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    shops: [],
    employees: [],
    donuts: []
  },
  getters: {

  },
  mutations: {
    setShops(state, args) {
      state.shops = args
    },
    setEmployees(state, args) {
      state.employees = args
    },
    setDonuts(state, args) {
      state.donuts = args
    }
  },
  actions: {
    getShops(context) {
      axios.get(`http://localhost:8000/shops`)
        .then(res => context.commit('setShops', res.data))
    },
    getEmployees(context) {
      axios.get(`http://localhost:8000/employees`)
        .then(res => context.commit('setEmployees', res.data))
    },
    getDonuts(context) {
      axios.get(`http://localhost:8000/donuts`)
        .then(res => context.commit('setDonuts', res.data))
    }
  }
})
