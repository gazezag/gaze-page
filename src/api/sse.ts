import { ServerSendEventName, SERVER_URL } from 'static/index';
import { useErrorInfoStore } from 'store/errorInfo';
import { useDeviceInfoStore, usePageInfoStore } from 'store/platformInfo';
import { useUserBehaviorStore } from 'store/userBehavior';
import { useVisitInfoStore } from 'store/visitInfo';
import {
  useNavigationTimingStore,
  usePerformanceTimingStore,
  useResourceFlowStore
} from 'store/webPerformance';

const getSourceListener = (target: string) => {
  const source = new EventSource(target);

  const sourceListener = (
    eventName: string,
    callback: (e: MessageEvent<string>) => void
  ) => {
    return addEventListener.call(
      source,
      eventName,
      callback as EventListenerOrEventListenerObject,
      false
    );
  };

  sourceListener('open', () => {
    console.log('SSE connection established');
  });

  return sourceListener;
};

export const init = () => {
  const sourceListener = getSourceListener(SERVER_URL);

  initVisitInfo(sourceListener);
  initPlatform(sourceListener);
  initWebPerformance(sourceListener);
  initUserBehavior(sourceListener);
  initErrorInfo(sourceListener);
};

const sourceEventHandler = (push: (item: any) => void) => {
  return (e: MessageEvent<string>) => {
    push(JSON.parse(e.data));
  };
};

const initVisitInfo = (sourceListener: any) => {
  sourceListener(
    ServerSendEventName.visitInfo,
    sourceEventHandler(useVisitInfoStore().push)
  );
};

const initPlatform = (sourceListener: any) => {
  sourceListener(
    ServerSendEventName.deviceInfo,
    sourceEventHandler(useDeviceInfoStore().push)
  );

  sourceListener(
    ServerSendEventName.pageInfo,
    sourceEventHandler(usePageInfoStore().push)
  );
};

const initWebPerformance = (sourceListener: any) => {
  sourceListener(
    ServerSendEventName.performanceTiming,
    sourceEventHandler(usePerformanceTimingStore().push)
  );

  sourceListener(
    ServerSendEventName.navigationTiming,
    sourceEventHandler(useNavigationTimingStore().push)
  );

  sourceListener(
    ServerSendEventName.resourceFlow,
    sourceEventHandler(useResourceFlowStore().push)
  );
};

const initUserBehavior = (sourceListener: any) => {
  const { pushRouterChange, pushHttp, pushOperation } = useUserBehaviorStore();

  sourceListener(ServerSendEventName.http, sourceEventHandler(pushHttp));

  sourceListener(
    ServerSendEventName.routerChange,
    sourceEventHandler(pushRouterChange)
  );

  sourceListener(
    ServerSendEventName.operation,
    sourceEventHandler(pushOperation)
  );
};

const initErrorInfo = (sourceListener: any) => {
  const {
    pushJsErrorInfo,
    pushStackTraceInfo,
    pushResourceErrorInfo,
    pushHttpErrorInfo,
    pushCorsErrorInfo
  } = useErrorInfoStore();

  sourceListener(
    ServerSendEventName.jsError,
    sourceEventHandler(pushJsErrorInfo)
  );

  sourceListener(
    ServerSendEventName.stackTrace,
    sourceEventHandler(pushStackTraceInfo)
  );

  sourceListener(
    ServerSendEventName.resourceError,
    sourceEventHandler(pushResourceErrorInfo)
  );

  sourceListener(
    ServerSendEventName.httpError,
    sourceEventHandler(pushHttpErrorInfo)
  );

  sourceListener(
    ServerSendEventName.corsError,
    sourceEventHandler(pushCorsErrorInfo)
  );
};
