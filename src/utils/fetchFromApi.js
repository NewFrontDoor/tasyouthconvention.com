import fetch from 'isomorphic-fetch';

import ENV from '../config/environment';

const fetchSessionToken = () => {
  return fetchText('session/token')
    .then(data => data.text());
}

const fetchFromApi = (url, ...args) => {
  return fetch(`${ENV.BASE_API_URL}${url}?_format=json`, ...args).then(response => {
    return response.json()
  });
};

export const postToApi = (url, postData) => {
  return fetchSessionToken().then(token => {
    return fetchFromApi(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-type': 'application/hal+json'
      },
      body: JSON.stringify(postData)
    })
  })
};

export const postEntityToApi = (postData) => {
  return postToApi('entity/node', postData);
}

export const fetchText = (url, ...args) => {
  return fetch(`${ENV.BASE_API_URL}${url}`, ...args);
};

export default fetchFromApi;
