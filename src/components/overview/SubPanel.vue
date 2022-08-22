<template>
  <n-space justify="space-around" size="large">
    <Panel :content-style="contentStyle">
      <template #header> Current Online </template>
      <template #default>
        <n-statistic tabular-nums>
          <template #prefix>
            <n-icon>
              <PeopleOutline />
            </n-icon>
          </template>
          <n-number-animation
            :from="pvStart"
            :to="currentPv"
            :on-finish="numberAnimationHandler"
          />
        </n-statistic>
      </template>
    </Panel>

    <Panel :content-style="contentStyle">
      <template #header> FP(0-2 2-4 4) </template>
      <template #default>
        <n-statistic tabular-nums>
          <template #prefix>
            <n-icon>
              <PodiumOutline />
            </n-icon>
          </template>
          <n-number-animation
            :from="fpStart"
            :to="currentFP"
            :on-finish="numberAnimationHandler"
          />
        </n-statistic>
      </template>
    </Panel>

    <Panel :content-style="contentStyle">
      <template #header> LCP(0-2.5 2.5-4.0 4.0) </template>
      <template #default>
        <n-statistic tabular-nums>
          <template #prefix>
            <n-icon>
              <PulseOutline />
            </n-icon>
          </template>
          <n-number-animation
            :from="lcpStart"
            :to="currentLCP"
            :on-finish="numberAnimationHandler"
          />
        </n-statistic>
      </template>
    </Panel>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Panel from 'components/shared/Panel.vue';
import { storeToRefs } from 'pinia';
import { useVisitInfoStore } from 'store/visitInfo';
import { usePerformanceTimingStore } from 'store/webPerformance';
import { PeopleOutline, PodiumOutline, PulseOutline } from '@vicons/ionicons5';

const contentStyle = {
  width: '400px'
};

export default defineComponent({
  name: 'MainPanel',
  components: {
    Panel,
    PeopleOutline,
    PodiumOutline,
    PulseOutline
  },
  setup() {
    const { currentPv } = storeToRefs(useVisitInfoStore());
    const { currentFP, currentLCP } = storeToRefs(usePerformanceTimingStore());

    const pvStart = ref<number>(0);
    const fpStart = ref<number>(0);
    const lcpStart = ref<number>(0);

    const numberAnimationHandler = () => {
      pvStart.value = currentPv.value;
      fpStart.value = currentFP.value;
      lcpStart.value = currentLCP.value;
    };

    return {
      contentStyle,

      currentPv,
      currentFP,
      currentLCP,

      pvStart,
      fpStart,
      lcpStart,

      numberAnimationHandler
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 30px;
}
</style>
