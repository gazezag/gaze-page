import { defineStore, storeToRefs } from 'pinia';
import { NavigationTiming } from 'types/navigationTiming';
import { PerformanceTiming } from 'types/performanceTiming';
import { ResourceFlowInfo } from 'types/resourceFlow';
import { getAverage, roundOff } from 'utils/math';
import {
  get,
  getKeys,
  getValueList,
  getValueListFromTwoDimensional,
  has,
  set
} from 'utils/objectHandler';
import { pushStore } from 'utils/storeHandler';
import { computed, ref } from 'vue';
import { useGlobal } from './globalOption';

// sucks....
const countAverage = (
  arr: Array<Array<{ type: string; value: number }>>,
  type: string
) => {
  return arr
    .filter(item => item)
    .reduce((average, curTimingList, i) => {
      const subAverage = curTimingList
        .filter(curTiming => curTiming.type === type)
        .map(fpInfo => fpInfo.value)
        .reduce((subAverage, curTiming) => {
          return i ? getAverage(subAverage, curTiming) : curTiming;
        }, 0);

      return i ? getAverage(average, subAverage) : subAverage;
    }, 0);
};

export const usePerformanceTimingStore = defineStore(
  'performanceTiming',
  () => {
    const performanceTimingList = ref<Array<Array<PerformanceTiming>>>([]);

    const currentFP = computed(() => {
      return countAverage(performanceTimingList.value, 'first-paint');
    });
    const currentLCP = computed(() => {
      return countAverage(
        performanceTimingList.value,
        'largest-contentful-paint'
      );
    });
    const dayAverage = computed(() => {
      const { weekDay } = storeToRefs(useGlobal());
      const averageObj = performanceTimingList.value[weekDay.value].reduce(
        (average, item) => {
          const { type } = item;
          set(
            average,
            type,
            has(average, type)
              ? getAverage(get(average, type), item.value)
              : item.value
          );
          return average;
        },
        {} as { [type: string]: number }
      );

      return getKeys(averageObj).reduce((averageList, key) => {
        averageList.push({
          type: key.toString(),
          value: get(averageObj, key)
        });

        return averageList;
      }, [] as Array<{ type: string; value: number }>);
    });

    const push = (item: PerformanceTiming) => {
      pushStore(performanceTimingList.value, item);
    };

    return {
      performanceTimingList,
      currentFP,
      currentLCP,
      dayAverage,
      push
    };
  }
);

export const useNavigationTimingStore = defineStore('navigationTiming', () => {
  const navigationTimingList = ref<Array<Array<NavigationTiming>>>([]);

  const dayAverage = computed(() => {
    const { weekDay } = storeToRefs(useGlobal());

    const averageObj = getObjectListAverage(
      navigationTimingList.value[weekDay.value]
    );

    return getKeys(averageObj).reduce((averageList, key) => {
      averageList.push({
        type: key.toString(),
        value: get(averageObj, key)
      });

      return averageList;
    }, [] as Array<{ type: string; value: number }>);
  });

  const totalAverageNavigationTiming = computed(() => {
    return roundOff(
      dayAverage.value.reduce((total, item) => {
        return item.type === 'time' ? total : total + item.value;
      }, 0)
    );
  });

  const push = (item: NavigationTiming) => {
    pushStore(navigationTimingList.value, item);
  };

  return {
    navigationTimingList,
    dayAverage,
    totalAverageNavigationTiming,
    push
  };
});

export const useResourceFlowStore = defineStore('resourceFlow', () => {
  const resourceFlowList = ref<Array<Array<ResourceFlowInfo>>>([]);

  const nameList = computed(() => {
    return getValueListFromTwoDimensional(resourceFlowList.value, 'name');
  });

  //! BUG
  const calculatedObj = computed(() => {
    const classifiedObj = resourceFlowList.value.reduce(
      (classifiedObj, flowList) => {
        if (flowList) {
          flowList.forEach(item => {
            const type = item.initiatorType;
            if (has(classifiedObj, type)) {
              get(classifiedObj, type).push(item);
            } else {
              set(classifiedObj, type, [item]);
            }
          });
        }

        return classifiedObj;
      },
      {} as { [type: string]: Array<any> }
    );

    return getKeys(classifiedObj).reduce((res, k) => {
      set(res, k, getObjectListAverage(get(classifiedObj, k)));
      return res;
    }, {} as { [type: string]: Array<any> });
  });

  const typeList = computed(() => {
    return getKeys(calculatedObj.value);
  });

  const averageList = computed(() => {
    return mergeObjectList(getValueList(calculatedObj.value));
  });

  const push = (item: ResourceFlowInfo) => {
    pushStore(resourceFlowList.value, item);
  };

  return {
    resourceFlowList,
    nameList,
    typeList,
    averageList,

    push
  };
});

const getObjectListAverage = (objList: Array<any>): any => {
  console.log(objList);

  return getKeys(objList[0])
    .filter(k => typeof get(objList[0], k) === 'number')
    .reduce((r, k) => {
      set(
        r,
        k,
        objList.reduce((average, o, i) => {
          const curValue = get(o, k);
          return i ? getAverage(average, curValue, false) : curValue;
        }, 0)
      );
      return r;
    }, {} as any);
};

const mergeObjectList = (stuffList: Array<any>): Array<any> => {
  return getKeys(stuffList[0]).reduce((mergedList, k) => {
    const valueList = stuffList.reduce((values, stuff) => {
      values.push(get(stuff, k));
      return values;
    }, [] as Array<any>);

    mergedList.push({
      name: k,
      data: valueList
    });

    return mergedList;
  }, [] as Array<any>);
};
