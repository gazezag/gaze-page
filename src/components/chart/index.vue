<template>
  <div :id="`chart-${chartId}`" :style="{ width, height }"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch
} from 'vue';
import { EChartsType, EChartOption, init } from 'echarts';
import { debounce } from 'utils/functional';

export default defineComponent({
  name: 'Charts',
  props: {
    chartId: {
      type: String,
      default: () => String(Date.now())
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    xAxis: {
      type: Object,
      default: () => null
    },
    yAxis: {
      type: Object,
      default: () => null
    },

    legend: Object,
    dataset: Object,
    series: Object,
    title: Object,
    grid: Object,
    dataZoom: Object,
    tooltip: Object,
    axisPointer: Object,
    brush: Object,
    calendar: Object,
    darkMode: Boolean
  },
  setup(props) {
    const charts = ref<EChartsType>(null as any);

    const setConfig = () => {
      charts.value.setOption({
        title: props.title,
        legend: props.legend,
        grid: props.grid,
        xAxis: props.xAxis,
        yAxis: props.yAxis,
        dataZoom: props.dataZoom,
        tooltip: props.tooltip,
        axisPointer: props.axisPointer,
        brush: props.brush,
        calendar: props.calendar,
        dataset: props.dataset,
        series: props.series,
        darkMode: props.darkMode
      } as EChartOption);
    };

    const initChart = () => {
      nextTick(() => {
        charts.value = init(document.querySelector(`#chart-${props.chartId}`)!);
        setConfig();
      });
    };

    onMounted(() => {
      initChart();
      window.addEventListener(
        'resize',
        debounce(() => {
          charts.value.resize();
        })
      );
    });

    onUnmounted(() => {
      charts.value.dispose();
    });

    watch(props, () => setConfig());
  }
});
</script>