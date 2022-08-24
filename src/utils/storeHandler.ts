import { getWeekDayEnd, getWeekDays } from './time';

export const pushStore = (arr: Array<any>, item: any) => {
  const weekDays = getWeekDays();

  for (let i = 0; i < 7; i++) {
    if (
      (item.time > weekDays[i] && item.time < weekDays[i + 1]) ||
      (i === 6 && item.time > weekDays[i] && item.time < getWeekDayEnd())
    ) {
      if (!arr[i]) {
        arr[i] = [item];
      } else {
        arr[i].push(item);
      }

      break;
    } else {
      arr[i] = [];
    }
  }
};
