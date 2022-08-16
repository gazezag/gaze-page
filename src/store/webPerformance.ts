import { defineStore } from 'pinia';
import { NavigationTiming } from 'types/navigationTiming';
import { PerformanceTiming } from 'types/performanceTiming';
import { ResourceFlowInfo } from 'types/resourceFlow';
import { ref } from 'vue';

export const usePerformanceTimingStore = defineStore(
  'performanceTiming',
  () => {
    const performanceTimingList = ref<Array<PerformanceTiming>>([]);

    const push = (item: PerformanceTiming) => {
      performanceTimingList.value.push(item);
    };

    return {
      performanceTimingList,
      push
    };
  }
);

export const useNavigationTimingStore = defineStore('navigationTiming', () => {
  const navigationTimingList = ref<Array<NavigationTiming>>([]);

  const push = (item: NavigationTiming) => {
    navigationTimingList.value.push(item);
  };

  return {
    navigationTimingList,
    push
  };
});

export const useResourceFlowStore = defineStore('resourceFlow', () => {
  const resourceFlowList = ref<Array<ResourceFlowInfo>>([]);

  const push = (item: ResourceFlowInfo) => {
    resourceFlowList.value.push(item);
  };

  return {
    resourceFlowList,
    push
  };
});
