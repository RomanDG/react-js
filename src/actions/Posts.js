import * as types from 'constants/actionTypes/PostsActionTypes';
import request from 'superagent';
import {API_ROOT} from 'constants/API';

// получение всех постов
const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

export const fetchPosts = () => dispatch => request.get(`${API_ROOT}/`).end((err, response) => {
  !err && dispatch(receivePosts(response.body));
});

// инкремент лайков в постах
const increment = (id) => ({
  type: types.INCREMENT_LIKES,
  id
});

export const incrementLikes = (id) => dispatch => {
  dispatch(increment(id));
};

// поиск по постам
const search = (query) => ({
  type: types.SEARCH_POSTS,
  query
});

export const searchPosts = (query) => dispatch => {
  dispatch(search(query));
};
