<template>
  <div class="input-container">
    <div class="input-wrapper">
      <!-- prefix tag -->
      <input-label :fontSize="fontSizeValue">
        <template v-slot:content>
          {{ prefix }}
        </template>
      </input-label>

      <input
        type="text"
        :class="classes"
        :placeholder="placeholder"
        @keyup.enter="OnEnter"
        @input="changeValue"
        :value="modelValue"
      />
      <!-- clear icon -->
      <input-clear-icon
        :visible="modelValue ? true : false"
        :disabled="disabled"
        @click="clearHandler"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { NormalSizes } from '@/utils/prop-types'
import { computed, defineComponent, ref, watchEffect } from 'vue'
import InputLabel from './InputLabel.vue'
import InputClearIcon from './InputClearIcon.vue'
export default defineComponent({
  name: 'Input',
  components: {
    InputLabel,
    InputClearIcon,
  },
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
    prefix: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['enter', 'update:modelValue', 'clearClick'],
  setup(props: any, { emit }) {
    const fontSizeValue = ref<string>()

    function changeValue(e: any) {
      emit('update:modelValue', e.target.value)
    }

    type InputSize = {
      fontSize: string
    }
    const queryInputSize = (size: NormalSizes) => {
      const sizesPool: Record<NormalSizes, InputSize> = {
        small: {
          fontSize: '12px',
        },
        medium: {
          fontSize: '14px',
        },
        large: {
          fontSize: '16px',
        },
      }
      // 索引签名获取
      return sizesPool[size]
    }

    watchEffect(() => {
      const { fontSize } = queryInputSize(props.size)
      fontSizeValue.value = fontSize
    })

    const clearHandler = (e: Event) => {
      changeValue(e)
      emit('clearClick', e)
    }

    return {
      changeValue,
      fontSizeValue,
      clearHandler,
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
.input-container {
  display: inline-flex;
  align-items: center;
  width: inherit;
  height: calc(2.5 * 16pt);
}
.input-wrapper {
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  height: 100%;
  flex: 1;
  user-select: none;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  transition: border 0.2s ease 0s, color 0.2s ease 0s;
  padding: 0;
}
.input-wrapper:hover {
  border-color: #666666;
}
.cus-input {
  margin: 4px 10px;
  box-shadow: none;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0;
  width: 100%;
  min-width: 0;
  height: 100%;
  -webkit-appearance: none;
  color: #000;
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
</style>
