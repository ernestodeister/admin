import Vue from 'vue'
import Vuex from 'vuex'
import axios    from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order:[],
    client: [],
    breakpoint: false,
  },
  mutations: {

    setOrder(state, list) {
      state.order = list;
    },
    setClient(state, list) {
      state.client = list;
    },
    setBreakpoint(state, Boolean) {
      state.breakpoint = Boolean;
    }

  },
  actions: {

    searchOrder({commit}, id) {
      console.log(id);
      axios.get('http://localhost:3000/order/'+id).then(res => {
            commit("setOrder", res.data);
        }).catch ((err) => {
            console.log(err);
        })
    },

    searchClient({commit}, idCli) {
      axios.get('http://localhost:3000/client/'+idCli).then(res => {
          commit("setClient", res.data);
      }).catch ((err) => {
          console.log(err);
      })
    },

    searchBreakpoint({commit}, withPages) {
      commit("setBreakpoint", withPages);
    },

    
    
  },
  modules: {

  }
})
