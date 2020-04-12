import axios from "axios";
import store from "./store";

function request(request) {
  const axiosSource = axios.CancelToken.source();
  request.cancelToken = axiosSource.token;
  store.dispatch("addRequest", { ...request, cancel: axiosSource.cancel });
  return request;
}

function requestError() {
  store.commit("requestFailed");
}

function response(response) {
  store.commit("requestSucceed");
  return response;
}

function responseError(error) {
  if (axios.isCancel(error)) console.log("Request is cancelled");
  else console.log("Unknown error");
}

axios.interceptors.request.use(request, requestError);
axios.interceptors.response.use(response, responseError);
