<template>
  <div class="left-section">
    <BaseBtn @click="$emit('send')">Send Request</BaseBtn>
    <BaseBtn :disabled="whenRequestInProgress" @click="$emit('cancel')">
      Cancel Request
    </BaseBtn>
    <BaseBtn :disabled="!whenRequestInProgress" @click="$emit('reset')">
      Reset requests
    </BaseBtn>
  </div>
</template>

<script>
import BaseBtn from "./BaseBtn";

export default {
  components: {
    BaseBtn
  },

  props: {
    done: {
      validator: prop => typeof prop === "boolean" || prop === null // done can be boolean or null
    }
  },

  computed: {
    whenRequestInProgress() {
      return this.done !== null;
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
