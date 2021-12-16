<template>
  <div :class="classes">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputLabel',
  props: {
    fontSize: String,
    isRight: Boolean,
  },
  setup(props, { slots }) {
    return {
      slots,
      classes: computed(() => ({
        [`cus-input-label ${props.isRight ? 'suffix' : ''}`]: true,
      })),
      style: computed(() => ({
        fontSize: props.fontSize,
      })),
    }
  },
})
</script>

<style scoped>
.cus-input-label {
  display: inline-flex;
    width: initial;
    height: 100%;
    align-items: center;
    pointer-events: none;
    margin: 0;
    padding: 0 8pt;
    color: #888;
    /* background-color: #fafafa;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea; */
    border-right: 1px solid #eaeaea;
    line-height: 1;
}

.cus-input-label:first-child {
  margin-top: 0;
}

.cus-input-label:last-child {
  margin-bottom: 0;
}
</style>
