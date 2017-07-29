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
const increment = (posts) => ({
  type: types.INCREMENT_LIKES,
  data: posts
});

export const incrementLikes = (id, posts) => dispatch => {
  posts[id - 1].metaData.currentLike += 1;
  dispatch(increment(posts));
};

// поиск по постам
const search = (string) => ({
  type: types.SEARCH_POSTS,
  string
});

export const searchPosts = (string) => dispatch => {
  dispatch(search(string));
};
