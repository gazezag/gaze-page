export interface RouterChangeInfo {
  time: number;
  groupId: number;
  page: string;
  method: string;
  href: string;
  hash: string;
  pathname: string;
}

export interface HttpInfo {
  time: number;
  groupId: number;
  page: string;
  method: string;
  url: string;
  headers: string;
  body: string;
  status: number;
  statusText: string;
  requestTime: number;
  responseTime: number;
  response: string;
}

export interface OperationInfo {
  time: number;
  groupId: number;
  page: string;
  type: string;
  target: string;
  count: number;
  domId: string;
  classList: string;
  tagName: string;
  innerText: string;
}

export interface UserBehavior {
  routerChange: Array<Array<RouterChangeInfo>>;
  http: Array<Array<HttpInfo>>;
  operation: Array<Array<OperationInfo>>;
}
