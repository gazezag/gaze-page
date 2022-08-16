<template>
  <n-card title="CLS">
    <template #header-extra> 布局分数的总和 </template>
    <template #footer> 实际测量:0.604 </template>
    <template #action>
      性能标准:
      <br />
      good(0.1以下)
      <br />
      deincrease(0.1-0.25)
      <br />
      poor(0.25以上)
    </template>
  </n-card>
  <n-card title="FP">
    <template #header-extra> 首次渲染时间 </template>
    <template #footer> 实际测量:99.6 </template>
    <template #action>
      性能标准:
      <br />
      good(0.1以下)
      <br />
      to improve(0.1-0.25)
      <br />
      poor(0.25以上)
    </template>
  </n-card>
  <n-card title="FCP">
    <template #header-extra> 首次有内容的渲染时间 </template>
    <template #footer> 实际测量:98.2 </template>
    <template #action>
      性能标准:
      <br />
      good(0.1以下)
      <br />
      to improve(0.1-0.25)
      <br />
      poor(0.25以上)
    </template>
  </n-card>
  <n-card title="LCP">
    <template #header-extra> 最大内容渲染 </template>
    <template #footer> 实际测量:99.599 </template>
    <template #action>
      性能标准:
      <br />
      good(0.1以下)
      <br />
      to improve(0.1-0.25)
      <br />
      poor(0.25以上)
    </template>
  </n-card>
  <n-card title="FID">
    <template #header-extra> 首次输入延迟 </template>

    <template #footer> 实际测量:3.1 </template>
    <template #action>
      性能标准:
      <br />
      good(0.1以下)
      <br />
      to improve(0.1-0.25)
      <br />
      poor(0.25以上)
    </template>
  </n-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PerformanceCard'
});
</script>
<style>
.n-card {
  max-width: 250px;
  float: left;
}
</style>
