export interface ResourceFlowInfo {
  time: number;
  groupId: number;
  name: string;
  transferSize: number;
  initiatorType: 'script' | 'img' | 'other';
  startTime: number;
  responseEnd: number;
  dns: number;
  initialConnect: number;
  ssl: number;
  request: number;
  ttfb: number;
  transmit: number;
  contentDownload: number;
}

// tODO
