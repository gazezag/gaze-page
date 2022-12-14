<template>
  <n-space justify="center">
    <Panel>
      <template #header>NAVIGATION TIMING</template>
      <template #default>
        <Chart
          chartId="navigation-timing"
          :width="'1200px'"
          :height="'600px'"
          :title="navigationTimingChartTitle"
          :legend="navigationTimingChartLegend"
          :series="navigationTimingChartSeries"
        />
      </template>
    </Panel>
  </n-space>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Chart from 'components/chart/index.vue';
import Panel from 'components/shared/Panel.vue';
import { storeToRefs } from 'pinia';
import { useNavigationTimingStore } from 'store/webPerformance';

const formatter = (param: any) => {
  return '{icon|●}{name|' + param.name + '}\n{value|' + param.value + '}';
};

const navigationTimingChartLegend = {
  orient: 'vertical',
  left: 'left'
};

export default defineComponent({
  name: 'NavigationTiming',
  components: { Chart, Panel },
  setup() {
    const { dayAverage, totalAverageNavigationTiming } = storeToRefs(
      useNavigationTimingStore()
    );

    const navigationTimingChartTitle = computed(() => {
      return {
        text: `Total\n${totalAverageNavigationTiming.value}`,
        top: 'center',
        left: 'center'
      };
    });

    const navigationTimingChartSeries = computed(() => {
      return {
        type: 'pie',
        radius: ['25%', '60%'],
        center: ['50%', '50%'],
        labelLine: {
          length: 20,
          length2: 120
        },
        label: {
          formatter,
          rich: {
            icon: {
              fontSize: 16,
              color: 'inherit'
            },
            name: {
              fontSize: 18,
              padding: [0, 0, 0, 10],
              color: '#000'
            },
            value: {
              fontSize: 14,
              fontWeight: 'bolder',
              padding: [10, 0, 0, 20],
              color: 'inherit'
            }
          }
        },
        data: dayAverage.value
          .filter(item => item.value && ['time'].indexOf(item.type) === -1)
          .map(item => {
            return {
              name: item.type,
              value: item.value
            };
          })
      };
    });

    return {
      navigationTimingChartTitle,
      navigationTimingChartLegend,
      navigationTimingChartSeries
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 20px;
}
</style>
