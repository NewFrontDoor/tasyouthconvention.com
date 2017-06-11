import fetchFromApi from '../utils/fetchFromApi';
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

  return fetchFromApi('basic-content')
    .then(json => {
      dispatch(receivedContent(json))
    });
}
