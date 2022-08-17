export const debounce = (fn: Function, t = 100) => {
  // eslint-disable-next-line no-undef
  let timer: NodeJS.Timeout;
  return function (...rest: Array<any>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, rest);
    }, t);
  };
};
