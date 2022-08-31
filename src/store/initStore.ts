import { Dataset } from 'types/dataset';
import { useErrorInfoStore } from './errorInfo';
import { useDeviceInfoStore, usePageInfoStore } from './platformInfo';
import { useUserBehaviorStore } from './userBehavior';
import { useVisitInfoStore } from './visitInfo';
import {
  useNavigationTimingStore,
  usePerformanceTimingStore,
  useResourceFlowStore
} from './webPerformance';

export const initStore = (dataset: Dataset) => {
  const { push: pushVisitInfo } = useVisitInfoStore();
  const { push: pushDeviceInfo } = useDeviceInfoStore();
  const { push: pushPageInfo } = usePageInfoStore();
  const { push: pushPerformanceTiming } = usePerformanceTimingStore();
  const { push: pushNavigationTiming } = useNavigationTimingStore();
  const { push: pushResourceFlow } = useResourceFlowStore();
  const { pushRouterChange, pushHttp, pushOperation } = useUserBehaviorStore();
  const {
    pushJsErrorInfo,
    pushStackTraceInfo,
    pushResourceErrorInfo,
    pushHttpErrorInfo,
    pushCorsErrorInfo
  } = useErrorInfoStore();

  dataset.visitInfo.forEach(info => pushVisitInfo(info));
  dataset.deviceInfo.forEach(info => pushDeviceInfo(info));
  dataset.pageInfo.forEach(info => pushPageInfo(info));
  dataset.performanceTiming.forEach(info => pushPerformanceTiming(info));
  dataset.navigationTiming.forEach(info => pushNavigationTiming(info));
  dataset.resourceFlow.forEach(info => pushResourceFlow(info));
  dataset.routerChange.forEach(info => pushRouterChange([info]));
  dataset.http.forEach(info => pushHttp([info]));
  dataset.operation.forEach(info => pushOperation([info]));
  dataset.jsError.forEach(info => pushJsErrorInfo(info));
  dataset.stackTrace.forEach(info => pushStackTraceInfo(info));
  dataset.resourceError.forEach(info => pushResourceErrorInfo(info));
  dataset.httpError.forEach(info => pushHttpErrorInfo(info));
  dataset.corsError.forEach(info => pushCorsErrorInfo(info));
};
