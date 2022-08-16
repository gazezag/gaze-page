export const SERVER_URL = 'http://localhost:3001/get-data';

export enum ServerSendEventName {
  // platform
  deviceInfo = 'device-info',
  pageInfo = 'page-info',

  // performance
  performanceTiming = 'performance-timing',

  // navigation
  navigationTiming = 'navigation-timing',

  // resource flow
  resourceFlow = 'resource-flow',

  // user behavior
  routerChange = 'router-change',
  operation = 'operation',
  http = 'http',

  // error info
  stackTrace = 'stack-trace',
  jsError = 'js-error',
  resourceError = 'resource-error',
  httpError = 'http-error',
  corsError = 'cors-error',

  // visit info
  visitInfo = 'visit-info'
}
