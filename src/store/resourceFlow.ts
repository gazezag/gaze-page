import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('resourceFlow', () => {
  const ResourceFlow = {
    type: 'resource-flow',
    value: [
      {
        name: 'http://localhost:3000/@vite/client',
        transferSize: 300,
        initiatorType: 'script',
        startTime: 28.9,
        responseEnd: 38.1,
        DNS: 0,
        initialConnect: 0,
        SSL: 28.9,
        request: 0.9,
        TTFB: 0.9,
        transmit: 0.3,
        contentDownload: 0.9
      },
      {
        name: 'https://img1.baidu.com/it/u=3217543765,3223180824&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=750',
        transferSize: 0,
        initiatorType: 'img',
        startTime: 29,
        responseEnd: 35.5,
        DNS: 0,
        initialConnect: 0,
        SSL: 0,
        request: 2.5,
        TTFB: 2.5,
        transmit: 2,
        contentDownload: 2.5
      },
      {
        name: 'https://img0.baidu.com/it/u=2518378277,1696634197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=773',
        transferSize: 0,
        initiatorType: 'img',
        startTime: 29.2,
        responseEnd: 97.7,
        DNS: 0,
        initialConnect: 0,
        SSL: 0,
        request: 0.3,
        TTFB: 0.3,
        transmit: 0.4,
        contentDownload: 0.3
      },
      {
        name: 'http://localhost:3000/src/main.ts?t=1659594691863',
        transferSize: 1148,
        initiatorType: 'script',
        startTime: 29.3,
        responseEnd: 100.9,
        DNS: 0,
        initialConnect: 0,
        SSL: 29.3,
        request: 4.5,
        TTFB: 4.5,
        transmit: 0.3,
        contentDownload: 4.5
      },
      {
        name: 'http://localhost:3000/node_modules/.pnpm/registry.npmmirror.com+vite@3.0.4/node_modules/vite/dist/client/env.mjs',
        transferSize: 300,
        initiatorType: 'other',
        startTime: 97.2,
        responseEnd: 99.1,
        DNS: 0,
        initialConnect: 0,
        SSL: 97.2,
        request: 0.6,
        TTFB: 0.6,
        transmit: 0.2,
        contentDownload: 0.6
      }
    ]
  };

  return {
    ResourceFlow
  };
});
