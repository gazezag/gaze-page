import { defineStore, storeToRefs } from 'pinia';
import {
  HttpInfo,
  OperationInfo,
  RouterChangeInfo,
  UserBehavior
} from 'types/userBehavior';
import { set } from 'utils/objectHandler';
import { pushStore } from 'utils/storeHandler';
import { computed, reactive } from 'vue';
import { useGlobal } from './globalOption';

export const useUserBehaviorStore = defineStore('userBehavior', () => {
  const userBehaviorInfo = reactive<UserBehavior>({
    routerChange: [],
    http: [],
    operation: []
  });

  const routerChangeSelected = computed(() => {
    const { weekDay } = useGlobal();
    const selected = userBehaviorInfo.routerChange[weekDay];
    if (!selected) return [];

    return selected.map(item => {
      const { time, method, href, hash, pathname } = item;
      const res = { time, method, href };

      if (hash) set(res, 'hash', hash);
      else if (pathname) set(res, 'pathname', pathname);

      return res;
    });
  });
  const routerChangeSelectedCount = computed(() => {
    return routerChangeSelected.value.length;
  });

  const httpSelected = computed(() => {
    const { weekDay } = useGlobal();
    const selected = userBehaviorInfo.http[weekDay];
    if (!selected) return [];

    return selected.map(item => {
      const {
        time,
        method,
        page,
        url,
        headers,
        body,
        status,
        statusText,
        response
      } = item;
      return {
        time,
        method,
        page,
        url,
        headers,
        body,
        status,
        statusText,
        response
      };
    });
  });
  const httpSelectedCount = computed(() => {
    return httpSelected.value.length;
  });

  const operationSelected = computed(() => {
    console.log(`operationSelected updated`);
    const { weekDay } = storeToRefs(useGlobal());
    const selected = userBehaviorInfo.operation[weekDay.value];
    if (!selected) return [];

    return selected.map(item => {
      const {
        time,
        page,
        type,
        target,
        count,
        domId,
        classList,
        tagName,
        innerText
      } = item;
      return {
        time,
        page,
        type,
        target,
        count,
        domId,
        classList,
        tagName,
        innerText
      };
    });
  });
  const operationSelectedCount = computed(() => {
    return operationSelected.value.length;
  });

  const pushRouterChange = (data: Array<RouterChangeInfo>) => {
    data.forEach(item => pushStore(userBehaviorInfo.routerChange, item));
  };
  const pushHttp = (data: Array<HttpInfo>) => {
    data.forEach(item => pushStore(userBehaviorInfo.http, item));
  };
  const pushOperation = (data: Array<OperationInfo>) => {
    data.forEach(item => pushStore(userBehaviorInfo.operation, item));
  };

  return {
    userBehaviorInfo,

    routerChangeSelected,
    routerChangeSelectedCount,

    httpSelected,
    httpSelectedCount,

    operationSelected,
    operationSelectedCount,

    pushRouterChange,
    pushHttp,
    pushOperation
  };
});
