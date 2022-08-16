import { defineStore } from 'pinia';
import {
  CorsErrorInfo,
  ErrorInfo,
  HttpErrorInfo,
  JsErrorInfo,
  ResourceErrorInfo,
  StackTraceInfo
} from 'types/errorInfo';
import { reactive } from 'vue';

export const useErrorInfoStore = defineStore('errorInfo', () => {
  const errorInfo = reactive<ErrorInfo>({
    jsError: [],
    resourceError: [],
    httpError: [],
    corsError: []
  });

  const pushJsErrorInfo = (item: JsErrorInfo) => {
    errorInfo.jsError.push({ info: item, stackTrace: [] });
  };
  const pushStackTraceInfo = (item: StackTraceInfo) => {
    errorInfo.jsError.some(errorInfo => {
      if (errorInfo.info.time === item.groupId) {
        errorInfo.stackTrace.push(item);
        return true;
      }
      return false;
    });
  };

  const pushResourceErrorInfo = (item: ResourceErrorInfo) => {
    errorInfo.resourceError.push(item);
  };

  const pushHttpErrorInfo = (item: HttpErrorInfo) => {
    errorInfo.httpError.push(item);
  };

  const pushCorsErrorInfo = (item: CorsErrorInfo) => {
    errorInfo.corsError.push(item);
  };

  return {
    errorInfo,
    pushJsErrorInfo,
    pushStackTraceInfo,
    pushResourceErrorInfo,
    pushHttpErrorInfo,
    pushCorsErrorInfo
  };
});
