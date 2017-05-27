import fetch from 'isomorphic-fetch';
import * as types from './action-types';

function requestingContent() {
  return {
    type: types.REQUESTING_CONTENT
  }
}

function receivedContent(content) {
  return {
    type: types.RECEIVED_CONTENT,
    content
  }
}

export const loadBasicContent = () => (dispatch) => {
  dispatch(requestingContent());

  return fetch('http://tasyouthconvention.vision100it.org/basic-content')
    .then(response => response.json())
    .then(json => {
      console.log('received basic content from administrative site ', json);
      dispatch(receivedContent(json))
    });
}
