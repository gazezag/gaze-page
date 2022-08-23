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
          :series="resourceFlowChartSeries"
        />
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

export default defineComponent({
  name: 'ResourceFlow',
  components: { Chart },
  setup() {
    const { averageList, typeList } = storeToRefs(useResourceFlowStore());

    const resourceFlowChartXAxis = computed(() => {
      return {
        type: 'category',
        data: typeList.value
      };
    });

    const resourceFlowChartSeries = computed(() => {
      return averageList.value
        .filter(
          item => ['groupId', 'time', 'transferSize'].indexOf(item.name) === -1
        )
        .map(item => {
          return {
            name: item.name,
            data: item.data,
            type: 'bar',
            stack: 'flow',
            color: item.name === 'startTime' && 'rgba(255,255,255,0)'
          };
        });
    });

    return {
      resourceFlowChartOption,

      resourceFlowChartXAxis,
      resourceFlowChartSeries
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 20px;
}
</style>
