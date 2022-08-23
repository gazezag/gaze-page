<template>
  <n-space justify="space-around" size="large">
    <Panel :content-style="contentStyle" :floatShadow="true">
      <template #header> CURRENT ONLINE </template>
      <template #default>
        <AnimationNumber
          :from="pvStart"
          :to="currentPv"
          :icon="PeopleOutline"
          :finishHandler="pvHandler"
          color="#4b3f97"
        />
      </template>
    </Panel>

    <Panel :content-style="contentStyle" :floatShadow="true">
      <template #header> FP </template>
      <template #default>
        <AnimationNumber
          :from="fpStart"
          :to="currentFP"
          :icon="PodiumOutline"
          :finishHandler="fpHandler"
          color="#4b3f97"
        />
      </template>
    </Panel>

    <Panel :content-style="contentStyle" :floatShadow="true">
      <template #header> LCP </template>
      <template #default>
        <AnimationNumber
          :from="lcpStart"
          :to="currentLCP"
          :icon="PulseOutline"
          :finishHandler="lcpHandler"
          color="#4b3f97"
        />
      </template>
    </Panel>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Panel from 'components/shared/Panel.vue';
import AnimationNumber from 'components/overview/AnimationNumber.vue';
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
    AnimationNumber
  },
  setup() {
    const { currentPv } = storeToRefs(useVisitInfoStore());
    const { currentFP, currentLCP } = storeToRefs(usePerformanceTimingStore());

    const pvStart = ref<number>(0);
    const pvHandler = () => {
      pvStart.value = currentPv.value;
    };

    const fpStart = ref<number>(0);
    const fpHandler = () => {
      fpStart.value = currentFP.value;
    };

    const lcpStart = ref<number>(0);
    const lcpHandler = () => {
      lcpStart.value = currentLCP.value;
    };

    return {
      contentStyle,

      currentPv,
      currentFP,
      currentLCP,

      pvStart,
      pvHandler,

      fpStart,
      fpHandler,

      lcpStart,
      lcpHandler,

      PeopleOutline,
      PodiumOutline,
      PulseOutline
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 30px;
}
</style>
