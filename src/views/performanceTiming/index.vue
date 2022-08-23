<template>
  <n-space size="large" vertical>
    <div class="panel" v-for="(item, i) in dayAverage" :key="i">
      <Panel>
        <template #header>
          {{ type2Label(item.type) }}
        </template>

        <template #header-extra>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon :size="30">
                <HelpCircleOutline />
              </n-icon>
            </template>

            <template #default>
              {{ getTip(item.type) }}
            </template>
          </n-tooltip>
        </template>

        <template #default>
          <ThreshouldNumber
            :data="item.value"
            :unit="'ms'"
            :threshould="getThreshould(item.type)"
          />
        </template>
      </Panel>
    </div>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { usePerformanceTimingStore } from 'store/webPerformance';
import Panel from 'components/shared/Panel.vue';
import ThreshouldNumber from 'components/shared/ThreshouldNumber.vue';
import { get } from 'utils/objectHandler';
import { HelpCircleOutline } from '@vicons/ionicons5';

const getThreshould = (type: string) => {
  return get(
    {
      'first-paint': [2000, 4000],
      'first-contentful-paint': [2000, 4000],
      'largest-contentful-paint': [2500, 4000],
      'cumulative-layout-shift': [0.1, 0.25],
      'first-input-delay': [100, 300]
    },
    type
  );
};

const getTip = (type: string) => {
  return get(
    {
      'first-paint': '用于记录页面第一次绘制像素的时间',
      'first-contentful-paint':
        '用于记录页面首次绘制文本、图片、非空白 Canvas 或 SVG 的时间',
      'largest-contentful-paint':
        '用于记录视窗内最大的元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变，另外该指标会在用户第一次交互后停止记录',
      'cumulative-layout-shift': '记录了页面上非预期的位移波动',
      'first-input-delay': '用户首次与页面交互时响应的延迟'
    },
    type
  );
};

const type2Label = (str: string) => {
  return str
    .replace(/-(\w{1})/g, match => {
      return ` ${match[1]}`;
    })
    .toUpperCase();
};

export default defineComponent({
  name: 'PerformanceTiming',
  components: { Panel, ThreshouldNumber, HelpCircleOutline },
  setup() {
    const { dayAverage } = storeToRefs(usePerformanceTimingStore());

    return {
      dayAverage,
      type2Label,
      getThreshould,
      getTip
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 20px;
}
</style>
