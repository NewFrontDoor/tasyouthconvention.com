import fetch from 'isomorphic-fetch';

import ENV from '../config/environment';

export default (url, ...args) => {
  return fetch(`${ENV.BASE_API_URL}${url}`, ...args).then(response => response.json());
};

export const fetchText = (url, ...args) => {
  return fetch(`${ENV.BASE_API_URL}${url}`,...args);
};
