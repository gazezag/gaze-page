import { defineStore } from 'pinia';
import { VisitInfo } from 'types/visitInfo';
import { pushStore } from 'utils/storeHandler';
import { getCurrentIntervalIdx, getWeekDays } from 'utils/time';
import { computed, ref } from 'vue';

export const useVisitInfoStore = defineStore('visitInfo', () => {
  const weekDays = getWeekDays();

  const visitInfoList = ref<Array<Array<VisitInfo>>>([]);
  const refererInfoMap = ref<Map<string, number>>(new Map());

  const pv = computed((): Array<number> => {
    const pvList = [];
    for (let i = 0; i < visitInfoList.value.length; i++) {
      const curInfoList = visitInfoList.value[i];
      pvList.push(curInfoList ? curInfoList.length : 0);
    }
    return pvList;
  });

  const currentPv = computed(() => {
    const currentInterval = visitInfoList.value[getCurrentIntervalIdx()];
    return currentInterval ? currentInterval.length : 0;
  });

  const pvTotal = computed(() => {
    // TODO
    let res = 0;
    console.log(visitInfoList.value);

    try {
      res = visitInfoList.value.reduce((total, curList) => {
        if (curList) {
          return total + curList.length;
        }

        return total;
      }, 0);
    } catch (e) {
      console.log('ERROR');
      console.log(visitInfoList.value);
    }

    return res;
  });

  const originRatio = computed(() => {
    return Array.from(refererInfoMap.value).map(l => {
      return {
        name: l[0],
        value: l[1]
      };
    });
  });

  const pvStartWith = (begin: number) => {
    return visitInfoList.value[weekDays.indexOf(begin)].length;
  };

  const push = (item: VisitInfo) => {
    const origin = item.origin;
    if (refererInfoMap.value.has(origin)) {
      const count = refererInfoMap.value.get(origin)!;
      refererInfoMap.value.set(origin, count + 1);
    } else {
      refererInfoMap.value.set(origin, 0);
    }

    pushStore(visitInfoList.value, item);

    // for (let i = 0; i <= 7; i++) {
    //   if (item.time > weekDays[i] && item.time < weekDays[i + 1]) {
    //     if (!visitInfoList.value[i]) {
    //       visitInfoList.value[i] = [item];
    //     } else {
    //       visitInfoList.value[i].push(item);
    //     }

    //     break;
    //   }
    // }
  };

  return {
    visitInfoList,
    pv,
    pvStartWith,
    currentPv,
    pvTotal,
    originRatio,
    push
  };
});
