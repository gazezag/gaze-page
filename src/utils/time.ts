const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

export const getNow = () => Date.now();

export const getTodayStart = () =>
  new Date(new Date().toLocaleDateString()).getTime();

export const getTodayEnd = () =>
  new Date(new Date().toLocaleDateString()).getTime() + MILLISECONDS_PER_DAY;

export const getWeekDayStart = (): number => {
  const today = new Date().getDay() || 7;
  return getTodayStart() - (today - 1) * MILLISECONDS_PER_DAY;
};

export const getWeekDayEnd = (): number => {
  return getWeekDayStart() + MILLISECONDS_PER_DAY * 7;
};

export const getHours = (): Array<number> =>
  new Array(24)
    .fill(getTodayStart())
    .map((t, i) => t + i * MILLISECONDS_PER_HOUR);

export const getWeekDays = (): Array<number> =>
  new Array(7)
    .fill(getWeekDayStart())
    .map((t, i) => t + i * MILLISECONDS_PER_DAY);

export const getWeekDaysLabel = (): Array<string> => [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
];

export const getWeekIdxByLabel = (label: string): number => {
  return getWeekDaysLabel().indexOf(label);
};

export const getWeekDayIntervalByLabel = (
  label: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
) => {
  const idx = getWeekIdxByLabel(label);
  const weekDays = getWeekDays();
  return [weekDays[idx], weekDays[idx + 1]];
};

export const getDate = (timestamp: number) => {
  const time = new Date(timestamp);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const dates = time.getDate();

  return `${year}.${month}.${dates}`;
};

export const getTime = (timestamp: number) => {
  const time = new Date(timestamp);
  const hour = time.getHours();
  const minute = time.getMinutes();
  return `${hour < 10 ? '0' + hour : hour}:${
    minute < 10 ? '0' + minute : minute
  }`;
};

export const getCurrentIntervalIdx = () => {
  const weekDays = getWeekDays();
  const now = getNow();
  let idx = -1;

  weekDays.some((time, i) => {
    if (now >= time && now <= weekDays[i + 1]) {
      idx = i;
      return true;
    }
    return false;
  });

  return idx;
};

export const timeFormatter = (time: number): string => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [
    year,
    '-',
    month,
    '-',
    day,
    ' ',
    hour < 10 ? `0${hour}` : hour,
    ':',
    minute < 10 ? `0${minute}` : minute,
    ':',
    second < 10 ? `0${second}` : second
  ].join('');
};
