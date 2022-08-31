import { has } from './objectHandler';
import { getIntervalIdx } from './time';

export const pushStore = <T extends { time: number }>(
  arr: Array<Array<T>>,
  item: T
) => {
  const idx = getIntervalIdx(item.time);
  if (arr[idx]) {
    arr[idx].push(item);
  } else {
    arr[idx] = [item];
  }
};
