export const roundOff = (num: number, range = 3): number => {
  return Number.parseFloat(num.toFixed(range));
};

export const getAverage = (
  num1: number,
  num2: number,
  getInteger = true
): number => {
  const res = (num1 + num2) / 2;
  return getInteger ? Math.floor(res) : roundOff(res);
};
