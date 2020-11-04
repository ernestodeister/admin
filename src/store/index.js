import Vue from 'vue'
import Vuex from 'vuex'
import axios    from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order:[],
    orderList: [],
    
  },
  mutations: {

    setOrderList(state, list) {
      state.orderList = list;
    },

  },
  actions: {

    searchOrder({commit,}, ) {
      axios.get('http://localhost:3000/order').then(res => {
            commit("setOrderList", res.data);
        }).catch ((err) => {
            console.log(err);
        })
    },
    
  },
  modules: {

  }
})
