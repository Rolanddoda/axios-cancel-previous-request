<template>
  <div class="right-section">
    <h4>Requests</h4>

    <div ref="logger" class="logger">
      <div
        class="log"
        :class="{ active: index === requests.length - 1 }"
        v-for="(req, index) of requests"
        :key="req.id"
      >
        <span>Request {{ index + 1 }}</span>
        <span title="pending" v-if="req.done === null">⏳ (loading)</span>
        <span title="succeed" v-else-if="req.done">☑️(success)</span>
        <span title="failed" v-else>✖️(cancelled)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    requests: Array
  },

  methods: {
    scrollToBottom() {
      // access from parent
      this.$nextTick(() => {
        const el = this.$refs.logger;
        el.scrollTop = el.scrollHeight - el.getBoundingClientRect().height;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
