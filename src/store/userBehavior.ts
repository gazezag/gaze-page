import { defineStore } from 'pinia';
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

    return userBehaviorInfo.routerChange[weekDay].map(item => {
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
    return userBehaviorInfo.http[weekDay].map(item => {
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
    const { weekDay } = useGlobal();
    return userBehaviorInfo.operation[weekDay].map(item => {
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

  const pushRouterChange = (item: RouterChangeInfo) => {
    pushStore(userBehaviorInfo.routerChange, item);
  };
  const pushHttp = (item: HttpInfo) => {
    pushStore(userBehaviorInfo.http, item);
  };
  const pushOperation = (item: OperationInfo) => {
    pushStore(userBehaviorInfo.operation, item);
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
