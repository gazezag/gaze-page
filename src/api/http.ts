// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import axios from 'axios';

// interface ErrorData {
//   status: number;
//   pageMessage: string;
//   nativeMessage: string;
// }

const service = axios.create({
  baseURL: import.meta.env.VITE_PROXY,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  },
  transformRequest: [data => JSON.stringify(data)],
  transformResponse: [
    data =>
      typeof data === 'string' && data.startsWith('{') ? JSON.parse(data) : data
  ]
});

// service.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     // add token
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// const errorHandler = (status: number, nativeMessage: string): ErrorData => {
//   let pageMessage = '';

//   switch (status) {
//     case 401:
//       pageMessage = 'Incorrect username and password';
//       break;
//     case 403:
//       pageMessage = 'Expired tokens';
//       break;
//     case 404:
//       pageMessage = 'Resource does not exist';
//       break;
//   }

//   return {
//     status,
//     pageMessage,
//     nativeMessage
//   };
// };

// service.interceptors.response.use(
//   (response: AxiosResponse) => {
//     const { data } = response;
//     const { status } = data;

//     if (status >= 200 && status < 300) {
//       return Promise.resolve(data);
//     } else {
//       return Promise.reject(data);
//     }
//   },
//   (error: AxiosError) => {
//     let errorData;
//     if (error.response) {
//       const { status, statusText } = error.response;
//       errorData = errorHandler(status, statusText);
//     }
//     return Promise.reject(errorData);
//   }
// );

export default service;
