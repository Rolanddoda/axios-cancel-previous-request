import Vue from "vue";
import Vuex from "vuex";
import { CANCELLED, LOADING } from "../utils/request-messages";

Vue.use(Vuex);

function cancelReq({ activeReq }) {
  activeReq.cancel();
  activeReq.msg = CANCELLED;
}

export default new Vuex.Store({
  state: {
    requests: [],
    activeReq: null
  },
  mutations: {
    addRequest: (state, req) => {
      if (state.activeReq) cancelReq(state.activeReq);
      const request = { cancel: req.cancel, msg: LOADING };
      state.requests.push(request);
      state.activeReq = request; // TODO check for immutability
    },

    cancelReq,

    clearActiveReq: state => (state.activeReq = null),

    editReqMsg: ({ activeReq }, msg) => (activeReq.msg = msg)
  }
});
