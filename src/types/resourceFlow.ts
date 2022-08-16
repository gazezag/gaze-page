export interface ResourceFlowInfo {
  time: number;
  groupId: number;
  name: string;
  transferSize: number;
  initiatorType: 'script' | 'img' | 'other';
  startTime: number;
  responseEnd: number;
  DNS: number;
  initialConnect: number;
  SSL: number;
  request: number;
  TTFB: number;
  transmit: number;
  contentDownload: number;
}

// tODO
