import * as types from 'constants/actionTypes/PostsActionTypes';
import request from 'superagent';
import {API_ROOT} from 'constants/API';

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

export const fetchPosts = () => dispatch => request.get(`${API_ROOT}/`).end((err, response) => {
  !err && dispatch(receivePosts(response.body));
});
