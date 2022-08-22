import http from './http';

export const fetchAll = (begin: number, end: number) => {
  return http.get(
    `http://localhost:3001/info/fetch-all?begin=${begin}&end=${end}`
  );
};
