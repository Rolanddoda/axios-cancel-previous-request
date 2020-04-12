import Vue from "vue";
import Vuex from "vuex";
import {
  CANCELLED,
  LOADING,
  SUCCESS,
  REQ_FAILED
} from "../utils/request-messages";

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
      state.activeReq = { cancel: req.cancel, msg: LOADING };
    },

    cancelReq(state) {
      state.activeReq.cancel();
      clearOldRequest(state, CANCELLED);
    },

    requestSucceed(state) {
      clearOldRequest(state, SUCCESS);
    },

    requestFailed(state) {
      clearOldRequest(state, REQ_FAILED);
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
