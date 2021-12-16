<template>
  <button :class="classes" @click="clickHandler" :style="style">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginButton',
  props: {
    size: {
      type: String,
      validator: function (value: string) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
    backgroundColor: {
      type: String,
      default: '#1ea7fd',
    },
    fontColor: {
      type: String,
      default: '#fff',
    },
  },
  emits: ['click'],
  setup(props: any, { emit }) {
    return {
      classes: computed(() => ({
        'cus-button': true,
        [`cus-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        fontColor: props.fontColor,
      })),
      clickHandler: () => {
        emit('click')
      },
    }
  },
})
</script>

<style scoped>
.cus-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.cus-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.cus-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
.cus-button {
  border: none;
  outline: none;
  /* 设置成圆 */
  border-radius: 30px;
  /* 设置 渐变色 */
  color: white;
  cursor: pointer;
}
</style>
