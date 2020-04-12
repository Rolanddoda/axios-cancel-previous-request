<template>
  <div id="app">
    <LeftSection />
    <RightSection />
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

  methods: {
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
</style>
