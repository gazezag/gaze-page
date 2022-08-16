export interface DeviceInfo {
  time: number;
  os_type: string;
  os_version: string;
  browser_type: string;
  browser_version: string;
  language: string;
}

export interface PageInfo {
  time: number;
  origin: string;
  url: string;
  title: string;
  referer: string;
}
