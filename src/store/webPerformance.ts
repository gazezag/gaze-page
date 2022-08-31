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
    .reduce((average, curTimingList) => {
      const subAverage = curTimingList
        .filter(curTiming => curTiming.type === type)
        .map(fpInfo => fpInfo.value)
        .reduce((subAverage, curTiming) => {
          return subAverage ? getAverage(subAverage, curTiming) : curTiming;
        }, 0);

      return average ? getAverage(average, subAverage) : subAverage;
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
      // TODO
      const { weekDay } = storeToRefs(useGlobal());
      let res: Array<any> = [];

      try {
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

        res = getKeys(averageObj).reduce((averageList, key) => {
          averageList.push({
            type: key.toString(),
            value: get(averageObj, key)
          });

          return averageList;
        }, [] as Array<{ type: string; value: number }>);
      } catch (e) {
        console.log('Error');
        console.log(performanceTimingList.value);
        console.log(weekDay.value);
      }

      return res;
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
    // TODO
    const { weekDay } = storeToRefs(useGlobal());
    let res: Array<any> = [];

    try {
      const averageObj = computed(() => {
        return getObjectListAverage(navigationTimingList.value[weekDay.value]);
      });

      res = getKeys(averageObj.value).reduce((averageList, key) => {
        averageList.push({
          type: key.toString(),
          value: get(averageObj.value, key)
        });

        return averageList;
      }, [] as Array<{ type: string; value: number }>);
    } catch (e) {
      console.log('Error');
      console.log(navigationTimingList.value);
      console.log(weekDay.value);
    }

    return res;
  });

  const totalAverageNavigationTiming = computed(() => {
    // TODO
    let res = 0;

    try {
      res = roundOff(
        dayAverage.value.reduce((total, item) => {
          return item.type === 'time' ? total : total + item.value;
        }, 0)
      );
    } catch (e) {
      console.log('Error');
      console.log(dayAverage.value);
    }

    return res;
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

  const classifiedObj = computed(() => {
    const { weekDay } = storeToRefs(useGlobal());

    // TODO
    let res = {};
    try {
      res = resourceFlowList.value[weekDay.value].reduce(
        (tempObj, curFlowInfo) => {
          const { initiatorType: type } = curFlowInfo;
          if (!type) {
            console.log(`current type: ${type}`);
            console.log(curFlowInfo);
            console.log('\n');
          }

          has(tempObj, type) || set(tempObj, type, []);
          get(tempObj, type).push(curFlowInfo);

          return tempObj;
        },
        {} as Record<string, Array<ResourceFlowInfo>>
      );
    } catch (e) {
      console.log('Error');
      console.log(resourceFlowList.value);
      console.log(weekDay.value);
    }

    return res;
  });

  const typeList = computed(() => {
    return getKeys(classifiedObj.value);
  });

  const averageList = computed(() => {
    // classify by initiatorType
    return getValueList(classifiedObj.value)
      .map(v => getObjectListAverage(v))
      .map(v => {
        const {
          initiatorType,
          startTime,
          responseEnd,
          dns,
          initialConnect,
          ssl,
          request,
          ttfb,
          transmit,
          contentDownload
        } = v as ResourceFlowInfo;
        return {
          initiatorType,
          startTime,
          responseEnd,
          dns,
          initialConnect,
          ssl,
          request,
          ttfb,
          transmit,
          contentDownload
        };
      });
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

const getObjectListAverage = <T extends object>(objList: Array<T>): T => {
  return getKeys(objList[0]).reduce((res, k) => {
    set(
      res,
      k,
      objList.reduce((average, o, i) => {
        const curValue = Reflect.get(o, k);
        return typeof curValue === 'string'
          ? curValue
          : i
          ? getAverage(average, curValue, false)
          : curValue;
      }, 0)
    );
    return res;
  }, {} as T);
};

//! BUG here
// const mergeObjectList = (stuffList: Array<any>): Array<any> => {
//   console.log(stuffList);

//   return getKeys(stuffList[0]).reduce((mergedList, k) => {
//     const valueList = stuffList.reduce((values, stuff) => {
//       values.push(get(stuff, k));
//       return values;
//     }, [] as Array<any>);

//     mergedList.push({
//       name: k,
//       data: valueList
//     });

//     return mergedList;
//   }, [] as Array<any>);
// };
