<template>
  <div class="filtersTab">
    <!-- 触发change-filterTab, 动态添加active元素属性 -->
    <span
      class="filter"
      v-for="filterTab in filterTabs"
      :key="filterTab.value"
      @click="$emit('change-filterTab', filterTab.value)"
      :class="{ active: selected === filterTab.value }"
    >
      {{ filterTab.label }}
    </span>
  </div>
</template>

<script lang="ts" name="TodoFilter">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['selected'],
  setup() {
    const filterTabs = [
      { label: '全部', value: 'all' },
      { label: '已完成', value: 'done' },
      { label: '未完成', value: 'todo' },
    ]
    return {
      filterTabs,
    }
  },
})
</script>

<style scoped>
/* 过滤标签 */
.filtersTab {
  display: flex;
  margin: 24px 2px;
  color: rgb(107, 94, 117);
  font-size: 14px;
}

.filtersTab .filter {
  margin-right: 14px;
  /* 过度时间 */
  transition: 0.8s;
  cursor: pointer;
}

.filtersTab .filter.active {
  color: rgb(129, 97, 165);
  /* 放大1.2b倍 */
  transform: scale(1.2);
}
</style>
