import { defineStore } from 'pinia';
import {
  HttpInfo,
  OperationInfo,
  RouterChangeInfo,
  UserBehavior
} from 'types/userBehavior';
import { reactive } from 'vue';

export const useUserBehaviorStore = defineStore('userBehavior', () => {
  const userBehaviorInfo = reactive<UserBehavior>({
    routerChange: [],
    http: [],
    operation: []
  });

  const pushRouterChange = (item: RouterChangeInfo) => {
    userBehaviorInfo.routerChange.push(item);
  };
  const pushHttp = (item: HttpInfo) => {
    userBehaviorInfo.http.push(item);
  };
  const pushOperation = (item: OperationInfo) => {
    userBehaviorInfo.operation.push(item);
  };

  return {
    userBehaviorInfo,
    pushRouterChange,
    pushHttp,
    pushOperation
  };
});
