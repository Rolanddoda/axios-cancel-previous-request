import Vue from "vue";
import Vuex from "vuex";
import * as msg from "../utils/request-messages";

Vue.use(Vuex);

function clearOldRequest(state, MSG) {
  state.activeReq.msg = MSG;
  state.requests.push(state.activeReq);
  state.activeReq = null;
}

export default new Vuex.Store({
  state: {
    requests: [],
    activeReq: null
  },
  mutations: {
    addRequest: (state, req) => {
      state.activeReq = { cancel: req.cancel, msg: msg.LOADING };
    },

    cancelReq(state) {
      state.activeReq.cancel();
      clearOldRequest(state, msg.CANCELLED);
    },

    requestSucceed(state) {
      clearOldRequest(state, msg.SUCCESS);
    },

    requestFailed(state) {
      clearOldRequest(state, msg.REQ_FAILED);
    },

    clearOldRequest
  },

  actions: {
    addRequest({ state, commit }, req) {
      if (state.activeReq) commit("cancelReq");
      commit("addRequest", req);
    }
  }
});
