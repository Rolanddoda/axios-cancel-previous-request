<template>
  <div class="left-section">
    <BaseBtn @click="send">Send Request</BaseBtn>
    <BaseBtn :disabled="!loading" @click="cancel">
      Cancel Request
    </BaseBtn>
    <BaseBtn :disabled="loading" @click="$emit('reset')">
      Reset requests
    </BaseBtn>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";
// Components
import BaseBtn from "./BaseBtn";

const API_URL = "https://reqres.in/api/users?delay=2";

export default {
  components: {
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

<style lang="scss" scoped>
.left-section {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
