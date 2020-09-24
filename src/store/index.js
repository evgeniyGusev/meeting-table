import Vue from 'vue'
import Vuex from 'vuex'
import users from "@/data/users.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users,
  },
  mutations: {
    ADD_USER(state, payload) {
      state.users.push({
        id: state.users.length + 1,
        ...payload
      })
    }
  },
  actions: {
  },
  getters: {
    users: (state) => state.users,
    rows: state => state.users.length
  }
})
