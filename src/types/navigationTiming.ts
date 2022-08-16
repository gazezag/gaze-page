export interface NavigationTiming {
  time: number;
  redirect: number;
  DNS: number;
  TCP: number;
  SSL: number;
  TTFB: number;
  transmit: number;
  domParse: number;
  deferExecuteDuration: number;
  domContentLoadedCallback: number;
  resourceLoad: number;
  domReady: number;
  L: number;
}
