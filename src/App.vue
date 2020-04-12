<template>
  <div id="app">
    <div class="left-section">
      <BaseBtn @click="send">Send Request</BaseBtn>
      <BaseBtn :disabled="!loading" @click="cancel">
        Cancel Request
      </BaseBtn>
      <BaseBtn :disabled="loading" @click="$emit('reset')">
        Reset requests
      </BaseBtn>
    </div>
    <RightSection />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
// Components
import RightSection from "./components/RightSection";
import BaseBtn from "./components/BaseBtn";

const API_URL = "https://reqres.in/api/users?delay=2";

export default {
  name: "App",

  components: {
    RightSection,
    BaseBtn
  },

  computed: {
    ...mapGetters(["loading"])
  },

  methods: {
    ...mapMutations({ cancel: "cancelReq" }),

    send() {
      axios.get(API_URL);
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
</style>
