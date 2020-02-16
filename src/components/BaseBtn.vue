<template>
  <div class="base-btn" :class="{ disabled }" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    disabled: Boolean
  }
};
</script>

<style lang="scss" scoped>
.base-btn {
  user-select: none;
  cursor: pointer;
  padding: 20px;
  border-radius: 5px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 10px 10px 60px #25557a, -10px -10px 60px #3373a6;
  }

  &.disabled {
    color: grey;
  }
}
</style>
