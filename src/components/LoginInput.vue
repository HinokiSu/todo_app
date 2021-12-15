<template>
  <div class="cus-input-wrapper">
    <input
      type="text"
      :class="classes"
      :placeholder="placeholder"
      @keyup.enter="OnEnter"
      @input="changeValue"
      :value="modelValue"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      validator: function (value: string) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
  },
  emits: ['enter', 'update:modelValue'],
  setup(props: any, { emit }) {
    function changeValue(e: any) {
      emit('update:modelValue', e.target.value)
    }
    return {
      changeValue,
      classes: computed(() => ({
        'cus-input': true,
        [`cus-input--${props.size || 'medium'}`]: true,
      })),
      OnEnter() {
        emit('enter')
      },
    }
  },
})
</script>

<style scoped>
.cus-input {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 2em;
  border-radius: 3em;
  display: inline-block;
  line-height: 1;
}
.cus-input--small {
  font-size: 12px;
  padding: 10px 16px;
}
.cus-input--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.cus-input--large {
  font-size: 16px;
  padding: 12px 24px;
}

.cus-input-wrapper input {
  /* 去除边框 及 轮廓 */
  border: none;
  outline: none;
  padding: 12px 50px 12px 18px;
  border-radius: 50px;
  box-shadow: 6px 6px 20px rgb(189, 186, 192);
  width: 100%;
  font-size: 16px;
  color: black;
}
</style>
