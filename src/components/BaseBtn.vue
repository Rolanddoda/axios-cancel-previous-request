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
    box-shadow: 20px 20px 60px #0b2b44, -20px -20px 60px #0f3b5c;
  }

  &.disabled {
    color: grey;
    pointer-events: none;
  }
}
</style>
