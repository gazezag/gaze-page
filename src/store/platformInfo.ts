import { defineStore } from 'pinia';
import { DeviceInfo, PageInfo } from 'types/platformInfo';
import { ref } from 'vue';

export const useDeviceInfoStore = defineStore('deviceInfo', () => {
  const deviceInfoList = ref<Array<DeviceInfo>>([]);

  const push = (item: DeviceInfo) => {
    deviceInfoList.value.push(item);
  };

  return {
    deviceInfoList,
    push
  };
});

export const usePageInfoStore = defineStore('pageInfo', () => {
  const pageInfoList = ref<Array<PageInfo>>([]);

  const push = (item: PageInfo) => {
    pageInfoList.value.push(item);
  };

  return {
    pageInfoList,
    push
  };
});
