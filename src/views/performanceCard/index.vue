<script lang="ts">
import { storeToRefs } from 'pinna';
import { defineComponent, h, Component, ref, onMounted } from 'vue';
import { NIcon, useMessage, NCard } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { usePerformanceTimingStore } from 'store/webPerformance';
import Mock from 'mockjs';

export default defineComponent({
  setup() {
    const newstore = usePerformanceTimingStore();
    // mock_test start
    for (var i = 0; i < 5; i++) {
      var obj = Mock.mock({
        time: '@number',
        type: '@character',
        value: '@float'
      });
      newstore.push(obj);
    }
    // mock_test over
    const performanceTimingList = newstore.performanceTimingList;
    return { performanceTimingList };
  }
});
</script>
<template>
  <n-card title="测试数据1">
    <template #header-extra> {{ performanceTimingList[0].type }} </template>
    <template #footer> 实际测量:{{ performanceTimingList[0].value }} </template>
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
  <n-card title="测试数据2">
    <template #header-extra> {{ performanceTimingList[1].type }} </template>
    <template #footer> 实际测量:{{ performanceTimingList[1].value }} </template>
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
  <n-card title="测试数据3">
    <template #header-extra> {{ performanceTimingList[2].type }} </template>
    <template #footer> 实际测量:{{ performanceTimingList[2].value }} </template>
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
  <n-card title="测试数据4">
    <template #header-extra> {{ performanceTimingList[3].type }} </template>
    <template #footer> 实际测量:{{ performanceTimingList[3].value }} </template>
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
  <n-card title="测试数据5">
    <template #header-extra> {{ performanceTimingList[4].type }} </template>

    <template #footer> 实际测量:{{ performanceTimingList[4].value }} </template>
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
  max-width: 300px;
  float: left;
}
</style>
