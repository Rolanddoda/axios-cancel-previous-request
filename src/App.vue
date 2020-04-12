<template>
  <div id="app">
    <div class="left-section">
      <BaseBtn @click="send">Send Request</BaseBtn>
      <BaseBtn :disabled="!loading" @click="cancel">
        Cancel Request
      </BaseBtn>
      <BaseBtn :disabled="loading" @click="reset">
        Reset requests
      </BaseBtn>
    </div>

    <div class="right-section">
      <h4>Requests</h4>

      <div ref="logger" class="logger">
        <div class="log" v-for="(req, index) of requests" :key="index">
          <span>Request {{ index + 1 }}</span>
          {{ req.msg }}
        </div>

        <div class="log active" v-if="activeReq">
          <span>Request {{ requests.length + 1 }}</span>
          {{ activeReq.msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import axios from "axios";
// Components
import BaseBtn from "./components/BaseBtn";

export default {
  name: "App",
  components: { BaseBtn },

  computed: {
    ...mapState(["requests", "activeReq"]),
    ...mapGetters(["loading"])
  },

  methods: {
    ...mapMutations({ cancel: "cancelReq", reset: "reset" }),

    send() {
      axios.get("https://reqres.in/api/users?delay=2");
      this.$nextTick(this.scrollToBottom);
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const el = this.$refs.logger;
        el.scrollTop = el.scrollHeight - el.getBoundingClientRect().height;
      });
    }
  }
};
</script>

<style lang="scss">
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
  background: #0d3350;
}

#app {
  display: grid;
  grid-template-columns: 1fr 300px;
}

.left-section {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.right-section {
  border-left: 1px solid;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;
  padding: 15px;
  min-width: 200px;
  overflow: hidden;

  > h4 {
    text-decoration: underline;
  }

  > .logger {
    padding: 10px;
    overflow: auto;

    .log {
      padding: 5px;
      box-shadow: 0 0 7px 0 black;
      border-radius: 10px;
      display: grid;
      grid-auto-flow: column;
      gap: 5px;

      + .log {
        margin-top: 5px;
      }

      &.active {
        border: 2px solid white;
      }
    }
  }
}

/* width */
.logger::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.logger::-webkit-scrollbar-track {
  border-radius: 15px;
}

/* Handle */
.logger::-webkit-scrollbar-thumb {
  background: #929eaa;
  border-radius: 10px;
}
</style>
