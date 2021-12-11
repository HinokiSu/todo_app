<template>
  <div>
    <input :type="type" :placeholder="placeholder" :value="value" ref="ref" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: ''
    },
    clearable: Boolean,
    prefix: [String, Number],
  },
  emits:['update:modelValue'],
  setup(props, { emit }) {

    // 更新数据
    const updateValue = (val: string | number) => {
      // 执行 更新事件
       if (val !== props.modelValue) {
        emit('update:modelValue', val)
      }
      
    }
    // 输入框 数据处理
   const InputHandler = (e: Event) => updateValue((e.target as HTMLInputElement).value)

    
    // 获取input Node
    const inputRef = ref<HTMLInputElement>()
    const InputProps = {
      ref: inputRef,
      value: props.modelValue,
      placeholder: props.placeholder,
      onInput: InputHandler
    }

    return {
      ...InputProps
    }
  },
})
</script>

<style scoped></style>
