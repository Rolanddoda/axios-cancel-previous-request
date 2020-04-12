<template>
  <div id="app">
    <LeftSection />
    <RightSection />
  </div>
</template>

<script>
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

export default {
  name: "App",

  components: {
    LeftSection,
    RightSection
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
