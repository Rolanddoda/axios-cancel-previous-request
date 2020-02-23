<template>
  <div id="app">
    <LeftSection
      :done="done"
      @send="send"
      @cancel="cancel"
      @reset="resetRequests"
    />
    <RightSection ref="rightSection" :requests="requests" />
  </div>
</template>

<script>
import axios from "axios";
// Components
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const API_URL = "https://reqres.in/api/users?delay=2";

export default {
  name: "App",

  components: {
    LeftSection,
    RightSection
  },

  data: () => ({
    requests: [],
    id: 0
  }),

  computed: {
    latest() {
      if (!this.requests.length) return null;
      return this.requests[this.requests.length - 1];
    },

    done: {
      get() {
        if (!this.latest) return undefined;
        return this.latest.done;
      },

      set(val) {
        const lastIndex = this.requests.length - 1;
        this.requests.splice(lastIndex, 1, {
          ...this.latest,
          done: val
        });
      }
    }
  },

  methods: {
    getNewRequest() {
      this.id++;
      const request = axios.CancelToken.source();
      return { id: this.id, done: null, request };
    },

    send() {
      this.latest && this.latest.done === null && this.cancel();
      this.makeRequest();
    },

    makeRequest() {
      this.requests.push(this.getNewRequest());
      this.$refs.rightSection.scrollToBottom();
      axios
        .get(API_URL, { cancelToken: this.latest.request.token })
        .then(() => (this.done = true))
        .catch(this.logResponseErrors);
    },

    logResponseErrors(err) {
      if (axios.isCancel(err)) {
        console.warn("Request cancelled by the user");
      } else {
        console.log("Another error happened");
      }
    },

    cancel() {
      this.latest.request.cancel("Optional message");
      this.done = false;
    },

    resetRequests() {
      this.requests = [];
      this.id = 0;
    }
  }
};
</script>

<style>
body,
html,
#app {
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
  text-align: center;
  color: white;
  background: #2c6490;
}

#app {
  display: grid;
  grid-template-columns: 1fr 300px;
}
</style>
