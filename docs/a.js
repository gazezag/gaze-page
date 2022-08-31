const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

export const getTodayStart = () =>
  new Date(new Date().toLocaleDateString()).getTime();

export const getWeekDayStart = () => {
  const today = new Date().getDay() || 7;
  return getTodayStart() - (today - 1) * MILLISECONDS_PER_DAY;
};

export const getWeekDays = () =>
  new Array(7)
    .fill(getWeekDayStart())
    .map((t, i) => t + i * MILLISECONDS_PER_DAY);

export const getIntervalIdx = time => {
  const weekDays = getWeekDays();
  let idx = -1;

  weekDays.some((weekTime, i) => {
    if (time >= weekTime && time < weekDays[i + 1]) {
      idx = i;
      return true;
    }
    return false;
  });

  return idx;
};

console.log(new Date(1661955586243));
console.log(getIntervalIdx(1661955586243));
