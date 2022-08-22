import {
  CorsErrorInfo,
  HttpErrorInfo,
  JsErrorInfo,
  ResourceErrorInfo,
  StackTraceInfo
} from './errorInfo';
import { NavigationTiming } from './navigationTiming';
import { PerformanceTiming } from './performanceTiming';
import { DeviceInfo, PageInfo } from './platformInfo';
import { ResourceFlowInfo } from './resourceFlow';
import { HttpInfo, OperationInfo, RouterChangeInfo } from './userBehavior';
import { VisitInfo } from './visitInfo';

`{
  "navigationTiming": [
      {
          "time": 1660555694025,
          "redirect": 0,
          "dns": 0,
          "tcp": 0,
          "ssl": 0,
          "ttfb": 2,
          "transmit": 3.2,
          "domParse": 77.3,
          "deferExecute_duration": 26.6,
          "domContent_loaded_callback": 0.1,
          "resourceLoad": 12.8,
          "domReady": 117.2,
          "l": 130
      }
  ],
  "performanceTiming": [
      {
          "time": 1660541165371,
          "type": "first-input-delay",
          "value": 4.4
      },
      {
          "time": 1660541165371,
          "type": "first-paint",
          "value": 98.4
      },
      {
          "time": 1660541228172,
          "type": "first-input-delay",
          "value": 4.4
      },
      {
          "time": 1660541228172,
          "type": "first-paint",
          "value": 98.4
      }
  ],
  "deviceInfo": [
      {
          "time": 1660284872826,
          "osType": "MacOS",
          "osVersion": "",
          "browserType": "Chrome",
          "browserVersion": "",
          "language": "zh-CN"
      },
      {
          "time": 1660285321652,
          "osType": "Window",
          "osVersion": "",
          "browserType": "Edge",
          "browserVersion": "",
          "language": "zh-CN"
      },
      {
          "time": 1660541292753,
          "osType": "xxxxxxxxMacOs",
          "osVersion": "",
          "browserType": "Chrome",
          "browserVersion": "103.0.0.0",
          "language": "zh-CN"
      },
      {
          "time": 1660541339665,
          "osType": "xxxxxxxxMacOs",
          "osVersion": "",
          "browserType": "Chrome",
          "browserVersion": "103.0.0.0",
          "language": "zh-CN"
      },
      {
          "time": 1660541341757,
          "osType": "xxxxxxxxMacOs",
          "osVersion": "",
          "browserType": "Chrome",
          "browserVersion": "103.0.0.0",
          "language": "zh-CN"
      }
  ],
  "pageInfo": [
      {
          "time": 1660529165756,
          "origin": "http://localhost:3000",
          "url": "http://localhost:3000/#/page2",
          "title": "Vite + Vue + TS",
          "referer": "http://localhost:3000/"
      },
      {
          "time": 1660529825519,
          "origin": "http://localhost:3000",
          "url": "http://localhost:3000/#/page2",
          "title": "Vite + Vue + TS",
          "referer": "http://localhost:3000/"
      },
      {
          "time": 1660529903427,
          "origin": "http://localhost:3000",
          "url": "http://localhost:3000/#/page2",
          "title": "Vite + Vue + TS",
          "referer": "http://localhost:3000/"
      },
      {
          "time": 1660529903930,
          "origin": "http://localhost:3000",
          "url": "http://localhost:3000/#/page2",
          "title": "Vite + Vue + TS",
          "referer": "http://localhost:3000/"
      }
  ],
  "resourceFlow": [
      {
          "time": 1660565070727,
          "groupId": 1660565070727,
          "name": "http://localhost:3000/@vite/client",
          "transferSize": 300,
          "initiatorType": "script",
          "startTime": 28.9,
          "responseEnd": 38.1,
          "dns": 0,
          "initialConnect": 0,
          "ssl": 28.9,
          "request": 0.9,
          "ttfb": 0.9,
          "transmit": 0.3,
          "contentDownload": 0.9
      }
  ],
  "routerChange": [
      {
          "time": 1660576096795,
          "groupId": 1660576096795,
          "page": "http://localhost:3000/#/page1",
          "method": "Hash",
          "href": "http://localhost:3000/#/page1",
          "hash": "#/page1",
          "pathname": ""
      },
      {
          "time": 1660576096795,
          "groupId": 1660576096795,
          "page": "http://localhost:3000/#/page2",
          "method": "Hash",
          "href": "http://localhost:3000/#/page2",
          "hash": "#/page2",
          "pathname": ""
      },
      {
          "time": 1660576096795,
          "groupId": 1660576096795,
          "page": "http://localhost:3000/page1",
          "method": "History",
          "href": "http://localhost:3000/page1",
          "hash": "",
          "pathname": "/page1"
      },
      {
          "time": 1660576096795,
          "groupId": 1660576096795,
          "page": "http://localhost:3000/page2",
          "method": "History",
          "href": "http://localhost:3000/page2",
          "hash": "",
          "pathname": "/page2"
      }
  ],
  "operation": [
      {
          "time": 1660576096848,
          "groupId": 1660576096848,
          "page": "",
          "type": "click",
          "target": "[object Object]",
          "count": 1,
          "domId": "ipt",
          "classList": "[]",
          "tagName": "input",
          "innerText": ""
      },
      {
          "time": 1660576096848,
          "groupId": 1660576096848,
          "page": "",
          "type": "keydown",
          "target": "[object Object]",
          "count": 13,
          "domId": "ipt",
          "classList": "[]",
          "tagName": "input",
          "innerText": " [Shift] Hello  [Shift] World"
      },
      {
          "time": 1660576096848,
          "groupId": 1660576096848,
          "page": "",
          "type": "click",
          "target": "[object Object]",
          "count": 7,
          "domId": "btn",
          "classList": "[\"hello\",\"world\",\"this\",\"is\",\"a\",\"className\"]",
          "tagName": "button",
          "innerText": " button click click"
      }
  ],
  "http": [
      {
          "time": 1660576096842,
          "groupId": 1660576096842,
          "page": "",
          "method": "GET",
          "url": "http://localhost:8080/api/get-name",
          "headers": "{\"Accept\":\"application/json, text/plain, */*\",\"Cache\":\"no-cache\"}",
          "body": "",
          "status": 0,
          "statusText": "",
          "requestTime": 72.2,
          "responseTime": 76.4,
          "response": ""
      },
      {
          "time": 1660576096842,
          "groupId": 1660576096842,
          "page": "",
          "method": "GET",
          "url": "http://localhost:8080/api/fetch-get",
          "headers": "{}",
          "body": "",
          "status": 0,
          "statusText": "",
          "requestTime": 72.6,
          "responseTime": 0,
          "response": ""
      }
  ],
  "stackTrace": [
      {
          "groupId": 1660618030394,
          "filename": "http://localhost:3000/src/test.ts",
          "functionName": "t",
          "line": 2,
          "col": 9
      },
      {
          "groupId": 1660618030394,
          "filename": "http://localhost:3000/src/main.ts?t=1660205635051",
          "functionName": "",
          "line": 14,
          "col": 3
      },
      {
          "groupId": 1660618030394,
          "filename": "http://localhost:3000/src/test.ts?t=1660205726302",
          "functionName": "",
          "line": 3,
          "col": 12
      }
  ],
  "jsError": [
      {
          "time": 1660618030394,
          "errorUid": "anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=",
          "message": "Uncaught Error: this is a Error",
          "errorType": "Error",
          "reason": "",
          "stackTrace_uid": 1660618030394
      },
      {
          "time": 1660618030394,
          "errorUid": "dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=",
          "message": "[object Object]",
          "errorType": "[object Object]",
          "reason": "",
          "stackTrace_uid": 1660618030394
      },
      {
          "time": 1660618211282,
          "errorUid": "dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=",
          "message": "[object Object]",
          "errorType": "[object Object]",
          "reason": "",
          "stackTrace_uid": 1660618211282
      },
      {
          "time": 1660618211281,
          "errorUid": "anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=",
          "message": "Uncaught Error: this is a Error",
          "errorType": "Error",
          "reason": "",
          "stackTrace_uid": 1660618211281
      },
      {
          "time": 1660618224393,
          "errorUid": "anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=",
          "message": "Uncaught Error: this is a Error",
          "errorType": "Error",
          "reason": "",
          "stackTrace_uid": 1660618224393
      }
  ],
  "resourceError": [
      {
          "time": 6944,
          "errorUid": "cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=",
          "message": "",
          "errorType": "Unknwon",
          "src": "http://thisisaerrorimg.com/errorImg",
          "outerHtml": "<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">",
          "tagName": "IMG"
      },
      {
          "time": 6944,
          "errorUid": "cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=",
          "message": "",
          "errorType": "Unknwon",
          "src": "http://thisisaerrorimg.com/errorImg",
          "outerHtml": "<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">",
          "tagName": "IMG"
      },
      {
          "time": 6944,
          "errorUid": "cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=",
          "message": "",
          "errorType": "Unknwon",
          "src": "http://thisisaerrorimg.com/errorImg",
          "outerHtml": "<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">",
          "tagName": "IMG"
      }
  ],
  "httpError": [
      {
          "time": 3128,
          "errorUid": "anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=",
          "message": "xxxxxxx",
          "status": 404,
          "statusText": "Not Found",
          "response": ""
      }
  ],
  "corsError": [
      {
          "time": 3128,
          "errorUid": "anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=",
          "message": "",
          "tagName": ""
      }
  ],
  "visitInfo": [
      {
          "time": 1660629054693,
          "origin": "http://baidu.com",
          "type": "normal"
      },
      {
          "time": 1660629078735,
          "origin": "http://baidu.com",
          "type": "normal"
      }
  ]
}`;
export interface Dataset {
  visitInfo: Array<VisitInfo>;

  deviceInfo: Array<DeviceInfo>;
  pageInfo: Array<PageInfo>;

  performanceTiming: Array<PerformanceTiming>;
  navigationTiming: Array<NavigationTiming>;
  resourceFlow: Array<ResourceFlowInfo>;

  routerChange: Array<RouterChangeInfo>;
  http: Array<HttpInfo>;
  operation: Array<OperationInfo>;

  stackTrace: Array<StackTraceInfo>;
  jsError: Array<JsErrorInfo>;
  resourceError: Array<ResourceErrorInfo>;
  httpError: Array<HttpErrorInfo>;
  corsError: Array<CorsErrorInfo>;
}
