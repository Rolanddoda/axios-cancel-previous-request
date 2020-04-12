import Vue from "vue";
import Vuex from "vuex";
import {
  CANCELLED,
  LOADING,
  SUCCESS,
  REQ_FAILED
} from "../utils/request-messages";

Vue.use(Vuex);

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
      state.activeReq.msg = CANCELLED;
      state.requests.push(state.activeReq);
      state.activeReq = null;
    },

    requestSucceed(state) {
      state.activeReq.msg = SUCCESS;
      state.requests.push(state.activeReq);
      state.activeReq = null;
    },

    requestFailed(state) {
      state.activeReq.msg = REQ_FAILED;
      state.requests.push(state.activeReq);
      state.activeReq = null;
    },

    editReqMsg: ({ activeReq }, msg) => (activeReq.msg = msg)
  }
});
