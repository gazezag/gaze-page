<template>
  <n-space justify="space-around" size="large">
    <Panel :floatShadow="true">
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

    <Panel :floatShadow="true">
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
import { computed, defineComponent } from 'vue';
import Chart from 'components/chart/index.vue';
import Panel from 'components/shared/Panel.vue';
import { useVisitInfoStore } from 'store/visitInfo';
import { storeToRefs } from 'pinia';
import {
  getCurrentIntervalIdx,
  getWeekDays,
  getWeekDaysLabel
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
    type: 'value',
    minInterval: 1
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

    const visitSeries = computed(() => {
      return {
        name: 'PV',
        type: 'line',
        smooth: true,
        data: pv.value
      };
    });
    const refererConfig = computed(() => {
      return {
        title: {
          text: `Total PV: ${pvTotal.value}`,
          left: 'center',
          top: 'center'
        },
        series: {
          type: 'pie',
          data: originRatio.value,
          label: {
            show: false
          },
          radius: ['40%', '70%']
        }
      };
    });

    const { setBegin, setEnd, setWeekDay } = useGlobal();
    const clickHandler = (param: any) => {
      const idx = typeof param === 'number' ? param : param.dataIndex;
      if (idx <= getCurrentIntervalIdx()) {
        const weekDays = getWeekDays();

        setBegin(weekDays[idx]);
        setEnd(weekDays[idx + 1]);
        setWeekDay(idx as number);

        router.push('/layout');
      }
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
