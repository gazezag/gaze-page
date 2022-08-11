import axios from './http';

// TODO
export const helloAPI = {
  getHello: () => {
    return axios.get('hello');
  }
};
