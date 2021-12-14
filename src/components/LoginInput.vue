<template>
  <div>
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
import { computed, defineComponent, reactive, ref } from 'vue'

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
    console.log(props)
    function changeValue(e: any) {
      emit('update:modelValue', e.target.value)
    }
    return {
      changeValue,
      classes: computed(() => ({
        'login-input': true,
        [`login-input--${props.size || 'medium'}`]: true,
      })),
      OnEnter() {
        emit('enter')
      },
    }
  },
})
</script>

<style scoped>
.login-input {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 2em;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.login-input--small {
  font-size: 12px;
  padding: 10px 16px;
}
.login-input--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.login-input--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
