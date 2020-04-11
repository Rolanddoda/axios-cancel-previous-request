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
    addRequest: ({ activeReq, requests }, req) => {
      if (activeReq) cancelReq(activeReq);
      const request = { cancel: req.cancel, msg: LOADING };
      requests.push(request);
      activeReq = request; // TODO check for immutability
    },

    cancelReq,

    clearActiveReq: ({ activeReq }) => (activeReq = null),

    editReqMsg: ({ activeReq }, msg) => (activeReq.msg = msg)
  }
});
