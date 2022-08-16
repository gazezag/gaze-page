<script lang="ts">
import { storeToRefs } from 'pinna';
import { defineComponent, h, Component, ref } from 'vue';
import { NIcon, useMessage, NCard } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { useStore } from 'store/performanceCard';

export default defineComponent({
  setup() {
    const store = useStore();
    const FP = store.FP;
    const FCP = store.FCP;
    const CLS = store.CLS;
    const LCP = store.LCP;
    const FID = store.FID;

    return { FP, FCP, CLS, LCP, FID };
  }
});
</script>
<template>
  <n-card title="CLS">
    <template #header-extra> 布局分数的总和 </template>
    <template #footer> 实际测量:{{ CLS.value }} </template>
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
    <template #footer> 实际测量:{{ FP.value }} </template>
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
    <template #footer> 实际测量:{{ FCP.value }} </template>
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
    <template #footer> 实际测量:{{ LCP.value }} </template>
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

    <template #footer> 实际测量:{{ FID.value.delay }} </template>
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

<style>
.n-card {
  max-width: 250px;
  float: left;
}
</style>
