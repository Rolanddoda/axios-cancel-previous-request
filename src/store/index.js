import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    requests: []
  },
  mutations: {
    addRequest: (state, req) => state.requests.push(req)
  }
});
