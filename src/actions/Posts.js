import * as types from 'constants/actionTypes/PostsActionTypes';

export const fetchPosts = () => ({
  API_CALL: {
    endpoint: '/',
    method: 'get',
    query: null,
    type: types.FETCH_POSTS_SUCCESS
  }
});

export const incrementLikes = (id) => ({
  API_CALL: {
    endpoint: '/like',
    method: 'put',
    query: {id},
    type: types.INCREMENT_LIKES
  }
});

export const updatePost = (id, data) => ({
  API_CALL: {
    endpoint: '/post',
    method: 'put',
    query: {id, data},
    type: types.UPDATE_POST
  }
});

export const createPost = (name, title, text) => ({
  API_CALL: {
    endpoint: '/post',
    method: 'post',
    query: {name, title, text},
    type: types.CREATE_POST
  }
});

export const searchPosts = (query) => ({
  SEARCH: {
    query,
    type: types.SEARCH_POSTS
  }
});
