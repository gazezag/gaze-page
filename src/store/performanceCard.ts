import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('performanceCard', () => {
  const FP = {
    type: 'first-paint',
    value: 99.6
  };
  const FCP = {
    type: 'first-contentful-paint',
    value: 98.2
  };
  const CLS = {
    type: 'cumulative-layout-shift',
    value: 0.604
  };
  const LCP = {
    type: 'largest-contentful-paint',
    value: 99.599
  };
  const FID = {
    type: 'first-input-delay',
    value: {
      eventName: 'keydown',
      target: {},
      startTime: 1731.7,
      delay: 3.1,
      eventHandleTime: 0.8
    }
  };

  return {
    FP,
    FCP,
    CLS,
    LCP,
    FID
  };
});
