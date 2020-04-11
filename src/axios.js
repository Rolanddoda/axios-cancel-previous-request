import axios from "axios";
import store from "./store";
import { CANCELLED, FAILED } from "./utils/request-messages";

function request(request) {
  store.commit("addRequest", request);
  return request;
}

function requestError(error) {
  if (axios.isCancel(error)) {
    store.commit("editReqMsg", CANCELLED);
  } else {
    store.commit("editReqMsg", FAILED);
  }
}

axios.interceptors.request.use(request, requestError);
