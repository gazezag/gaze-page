import { defineStore } from 'pinia';
import { VisitInfo } from 'types/visitInfo';
import { ref } from 'vue';

export const useVisitInfoStore = defineStore('visitInfo', () => {
  const visitInfoList = ref<Array<VisitInfo>>([]);

  const push = (item: VisitInfo) => {
    visitInfoList.value.push(item);
  };

  const countVisited = (): number => visitInfoList.value.length;

  return {
    visitInfoList,
    push,
    countVisited
  };
});
