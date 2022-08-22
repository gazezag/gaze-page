<template>
  <n-space justify="space-around" size="large">
    <Panel>
      <template #header> PAGE VIEW </template>
      <template #default>
        <Chart
          chartId="visit"
          :width="'850px'"
          :height="'400px'"
          :tooltip="visitChartOption.tooltip"
          :xAxis="visitChartOption.xAxis"
          :yAxis="visitChartOption.yAxis"
          :series="visitSeries"
          :click-handler="clickHandler"
        />
      </template>
    </Panel>

    <Panel>
      <template #header> REFERER </template>
      <template #default>
        <Chart
          chartId="referer"
          :width="'360px'"
          :height="'400px'"
          :tooltip="refererChartOption.tooltip"
          :title="refererConfig.title"
          :series="refererConfig.series"
        />
      </template>
    </Panel>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Chart from 'components/chart/index.vue';
import Panel from 'components/shared/Panel.vue';
import { useVisitInfoStore } from 'store/visitInfo';
import { storeToRefs } from 'pinia';
import {
  getWeekDayIntervalByLabel,
  getWeekDaysLabel,
  getWeekIdxByLabel
} from 'utils/time';
import router from 'router/routes';
import { useGlobal } from 'store/globalOption';

// static configuration of line chart
const visitChartOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      crossStyle: {
        color: '#999'
      }
    },
    formatter: (params: any) => {
      const x = params[0].axisValueLabel;
      const y = params[0].value;

      return `${x}<br />PV: ${y}`;
    }
  },
  xAxis: {
    name: 'weekday',
    type: 'category',
    data: getWeekDaysLabel(),
    axisPointer: {
      type: 'shadow'
    }
  },
  yAxis: {
    type: 'value'
  }
};

// static configuration of pie chart
const refererChartOption = {
  tooltip: {
    show: true,
    trigger: 'item'
  }
};

export default defineComponent({
  name: 'MainPanel',
  components: { Panel, Chart },
  setup() {
    const { pv, pvTotal, originRatio } = storeToRefs(useVisitInfoStore());
    const visitSeries = reactive({
      name: 'PV',
      type: 'line',
      smooth: true,
      data: pv
    });
    const refererConfig = reactive({
      title: {
        text: `Total PV: ${pvTotal.value}`,
        left: 'center',
        top: 'center'
      },
      series: {
        type: 'pie',
        data: originRatio,
        label: {
          show: false
        },
        radius: ['40%', '70%']
      }
    });

    const { setBegin, setEnd, setWeekDay } = useGlobal();
    const clickHandler = (params: any) => {
      const label = params.name;
      const [begin, end] = getWeekDayIntervalByLabel(label);
      const weekDay = getWeekIdxByLabel(label);

      setBegin(begin);
      setEnd(end);
      setWeekDay(weekDay);

      router.push('/layout');
    };

    return {
      visitChartOption,
      visitSeries,

      refererChartOption,
      refererConfig,

      clickHandler
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 30px;
}
</style>
