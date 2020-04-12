import axios from "axios";
import store from "./store";
import { CANCELLED, REQ_FAILED, SUCCESS } from "./utils/request-messages";

function request(request) {
  const axiosSource = axios.CancelToken.source();
  request.cancelToken = axiosSource.token;
  store.commit("addRequest", { ...request, cancel: axiosSource.cancel });
  return request;
}

function requestError(error) {
  if (axios.isCancel(error)) {
    store.commit("editReqMsg", CANCELLED);
  } else {
    store.commit("editReqMsg", REQ_FAILED);
  }
}

function response(response) {
  store.commit("editReqMsg", SUCCESS);
  store.commit("clearActiveReq");
  return response;
}

axios.interceptors.request.use(request, requestError);
axios.interceptors.response.use(response);
