import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('navigationTiming', () => {
  const NavigationTiming_List = [
    {
      type: 'navigation-timing',
      value: {
        redirect: 55,
        DNS: 66,
        TCP: 66,
        SSL: 66,
        TTFB: 66,
        transmit: 66,
        domParse: 66,
        deferExecuteDuration: 66,
        domContentLoadedCallback: 0.2,
        resourceLoad: 38.7,
        domReady: 40,
        L: 40
      }
    },
    {
      type: 'navigation-timing',
      value: {
        redirect: 0,
        DNS: 0,
        TCP: 0,
        SSL: 0,
        TTFB: 17.8,
        transmit: 11.9,
        domParse: 50.1,
        deferExecuteDuration: 94.9,
        domContentLoadedCallback: 0.2,
        resourceLoad: 38.7,
        domReady: 178.3,
        L: 0
      }
    },
    {
      type: 'navigation-timing',
      value: {
        redirect: 0,
        DNS: 0,
        TCP: 0,
        SSL: 0,
        TTFB: 17.8,
        transmit: 11.9,
        domParse: 50.1,
        deferExecuteDuration: 94.9,
        domContentLoadedCallback: 0.2,
        resourceLoad: 38.7,
        domReady: 178.3,
        L: 0
      }
    },
    {
      type: 'navigation-timing',
      value: {
        redirect: 0,
        DNS: 0,
        TCP: 0,
        SSL: 0,
        TTFB: 17.8,
        transmit: 11.9,
        domParse: 50.1,
        deferExecuteDuration: 94.9,
        domContentLoadedCallback: 0.2,
        resourceLoad: 38.7,
        domReady: 178.3,
        L: 0
      }
    },
    {
      type: 'navigation-timing',
      value: {
        redirect: 0,
        DNS: 0,
        TCP: 0,
        SSL: 0,
        TTFB: 17.8,
        transmit: 11.9,
        domParse: 50.1,
        deferExecuteDuration: 94.9,
        domContentLoadedCallback: 0.2,
        resourceLoad: 38.7,
        domReady: 178.3,
        L: 0
      }
    }
  ];
  return {
    NavigationTiming_List
  };
});
