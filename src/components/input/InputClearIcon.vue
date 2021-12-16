<template>
  <div class="cus-input-clear-icon" :class="classes" @click="handleClick">
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputClearIcon',
  props: {
    visible: Boolean,
    disabled: Boolean,
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()
      emit('click', e)
    }

    return {
      handleClick,
      classes: computed(() => ({
        visible: props.visible,
        disabled: props.disabled,
      })),
    }
  },
})
</script>

<style scoped>
.cus-input-clear-icon {
  padding: 0 8pt;
  margin: 0;
  display: inline-flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  transition: color 150ms ease 0s;
  cursor: pointer;
  visibility: hidden;
  color: #999;
  opacity: 0;
}

.cus-input-clear-icon.visible {
  visibility: visible;
  opacity: 1;
}

.cus-input-clear-icon.disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.cus-input-clear-icon:hover {
  color: #444;
}

svg {
  color: currentColor;
  width: calc(2 * 10.66px);
  height: calc(2 * 10.66px);
}
</style>
