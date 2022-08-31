<template>
  <n-space justify="center">
    <Panel>
      <template #header>RESOURCE FLOW</template>
      <template #default>
        <Chart
          chartId="resource-flow"
          :width="'1200px'"
          :height="'600px'"
          :title="resourceFlowChartOption.title"
          :tooltip="resourceFlowChartOption.tooltip"
          :legend="resourceFlowChartOption.legend"
          :grid="resourceFlowChartOption.grid"
          :yAxis="resourceFlowChartOption.yAxis"
          :xAxis="resourceFlowChartXAxis"
          :series="series"
          :dataset="dataset"
        />
        <!-- :series="resourceFlowChartSeries" -->
      </template>
    </Panel>
  </n-space>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Chart from 'components/chart/index.vue';
import { storeToRefs } from 'pinia';
import { useResourceFlowStore } from 'store/webPerformance';

const resourceFlowChartOption = {
  title: {
    // text: '(ms)',
    // padding: 20,
    // textStyle: {
    //   fontSize: 17,
    //   fontWeight: 'bolder',
    //   color: '#333'
    // },
    // subtextStyle: {
    //   fontSize: 13,
    //   fontWeight: 'bolder'
    // }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    // orient: 'vertical',
    // left: 'left'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    type: 'value'
  }
};

const keyList = [
  'startTime',
  'responseEnd',
  'dns',
  'initialConnect',
  'ssl',
  'request',
  'ttfb',
  'transmit',
  'contentDownload'
];

export default defineComponent({
  name: 'ResourceFlow',
  components: { Chart },
  setup() {
    const { averageList, typeList } = storeToRefs(useResourceFlowStore());

    console.log(typeList.value);

    const resourceFlowChartXAxis = computed(() => {
      return {
        type: 'category',
        data: typeList.value
      };
    });

    const dataset = computed(() => {
      return {
        dimensions: ['initiatorType', ...keyList],
        source: averageList.value
      };
    });

    const series = computed(() => {
      return keyList.map(item => {
        return {
          type: 'bar',
          stack: 'flow',
          color: item === 'startTime' && 'rgba(255,255,255,0)'
        };
      });
    });

    return {
      resourceFlowChartOption,
      resourceFlowChartXAxis,

      dataset,
      series
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 20px;
}
</style>
