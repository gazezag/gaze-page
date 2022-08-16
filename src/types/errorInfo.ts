export interface StackTraceInfo {
  groupId: number;
  filename: string;
  functionName: string;
  line: number;
  col: number;
}

interface BasicErrorInfo {
  time: number;
  errorUid: string;
  message: string;
}

export interface JsErrorInfo extends BasicErrorInfo {
  errorType: string;
  reason: string;
  stackTraceUid: number; // use the sending time as ID temporarily
}

export interface ResourceErrorInfo extends BasicErrorInfo {
  errorType: string;
  src: string;
  outerHtml: string;
  tagName: string;
}

export interface HttpErrorInfo extends BasicErrorInfo {
  status: number;
  statusText: string;
  response: string;
}

export interface CorsErrorInfo extends BasicErrorInfo {
  tagName: string;
}

export interface ErrorInfo {
  jsError: Array<{
    info: JsErrorInfo;
    stackTrace: Array<StackTraceInfo>;
  }>;
  resourceError: Array<ResourceErrorInfo>;
  httpError: Array<HttpErrorInfo>;
  corsError: Array<CorsErrorInfo>;
}
