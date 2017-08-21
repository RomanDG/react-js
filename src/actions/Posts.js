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
    method: 'post',
    query: {id},
    type: types.INCREMENT_LIKES
  }
});

export const updatePost = (id, data) => ({
  API_CALL: {
    endpoint: '/post',
    method: 'post',
    query: {id, data},
    type: types.UPDATE_POST
  }
});

export const searchPosts = (query) => ({
  SEARCH: {
    query,
    type: types.SEARCH_POSTS
  }
});
