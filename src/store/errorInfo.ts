import { defineStore } from 'pinia';
import {
  CorsErrorInfo,
  ErrorInfo,
  HttpErrorInfo,
  JsErrorInfo,
  ResourceErrorInfo,
  StackTraceInfo
} from 'types/errorInfo';
import { getValueList } from 'utils/objectHandler';
import { pushStore } from 'utils/storeHandler';
import { getWeekDayEnd, getWeekDays } from 'utils/time';
import { computed, reactive } from 'vue';
import { useGlobal } from './globalOption';

export const useErrorInfoStore = defineStore('errorInfo', () => {
  const errorInfo = reactive<ErrorInfo>({
    jsError: [],
    resourceError: [],
    httpError: [],
    corsError: []
  });

  const isErrorOccur = computed(() => {
    return (
      errorInfo.jsError.length ||
      errorInfo.resourceError.length ||
      errorInfo.httpError.length ||
      errorInfo.corsError.length
    );
  });

  const jsErrorSelected = computed(() => {
    const { weekDay } = useGlobal();

    return errorInfo.jsError[weekDay].map(item => {
      const { time, message, errorType, reason } = item.info;
      return {
        time,
        message: message || '/',
        errorType: errorType || '/',
        reason: reason || '/',
        stackTrace: item.stackTrace.map(trace => {
          const { filename, functionName, line, col } = trace;
          return {
            filename,
            functionName: functionName || '/',
            line: line || '/',
            col: col || '/'
          };
        })
      };
    });
  });
  const jsErrorSelectedCount = computed(() => {
    return jsErrorSelected.value.length;
  });

  const resourceErrorSelected = computed(() => {
    const { weekDay } = useGlobal();

    return errorInfo.resourceError[weekDay].map(item => {
      const { time, message, errorType, src, outerHtml, tagName } = item;
      return {
        time,
        errorType,
        tagName: tagName || '/',
        message: message || '/',
        src: src || '/',
        outerHtml: outerHtml || '/'
      };
    });
  });
  const resourceErrorSelectedCount = computed(() => {
    return resourceErrorSelected.value.length;
  });

  const httpErrorSelected = computed(() => {
    const { weekDay } = useGlobal();

    return errorInfo.httpError[weekDay].map(item => {
      const { time, status, statusText, message, response } = item;
      return {
        time,
        status,
        statusText,
        message: message || '/',
        response: response || '/'
      };
    });
  });
  const httpErrorSelectedCount = computed(() => {
    return httpErrorSelected.value.length;
  });

  const corsErrorSelected = computed(() => {
    const { weekDay } = useGlobal();

    return errorInfo.corsError[weekDay].map(item => {
      const { time, message, tagName } = item;
      return {
        time,
        tagName: tagName || '/',
        message: message || '/'
      };
    });
  });
  const corsErrorSelectedCount = computed(() => {
    return corsErrorSelected.value.length;
  });

  const flatedList = computed(() => {
    return getValueList(errorInfo).flat(Infinity);
  });
  const total = computed(() => {
    return flatedList.value.length;
  });

  const pushJsErrorInfo = (item: JsErrorInfo) => {
    const weekDays = getWeekDays();
    const itemObj = { info: item, stackTrace: [] };
    for (let i = 0; i < 7; i++) {
      if (
        (item.time > weekDays[i] && item.time < weekDays[i + 1]) ||
        (i === 6 && item.time > weekDays[i] && item.time < getWeekDayEnd())
      ) {
        if (!errorInfo.jsError[i]) {
          errorInfo.jsError[i] = [itemObj];
        } else {
          errorInfo.jsError[i].push(itemObj);
        }

        break;
      }
    }
  };
  const pushStackTraceInfo = (item: StackTraceInfo) => {
    errorInfo.jsError.forEach(errorInfoList => {
      errorInfoList.some(errorInfo => {
        if (errorInfo.info.time === item.groupId) {
          errorInfo.stackTrace.push(item);
          return true;
        }
        return false;
      });
    });
  };

  const pushResourceErrorInfo = (item: ResourceErrorInfo) => {
    pushStore(errorInfo.resourceError, item);
  };

  const pushHttpErrorInfo = (item: HttpErrorInfo) => {
    pushStore(errorInfo.httpError, item);
  };

  const pushCorsErrorInfo = (item: CorsErrorInfo) => {
    pushStore(errorInfo.corsError, item);
  };

  return {
    errorInfo,

    isErrorOccur,

    jsErrorSelected,
    jsErrorSelectedCount,
    resourceErrorSelected,
    resourceErrorSelectedCount,
    httpErrorSelected,
    httpErrorSelectedCount,
    corsErrorSelected,
    corsErrorSelectedCount,

    flatedList,
    total,

    pushJsErrorInfo,
    pushStackTraceInfo,
    pushResourceErrorInfo,
    pushHttpErrorInfo,
    pushCorsErrorInfo
  };
});
