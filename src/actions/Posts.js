import * as types from 'constants/actionTypes/PostsActionTypes';

export const fetchPosts = () => {
  return {
    API_CALL: {
      endpoint: '/',
      method: 'get',
      query: null,
      type: types.FETCH_POSTS_SUCCESS
    }
  }
};

export const incrementLikes = (id) => {
  return {
    API_CALL: {
      endpoint: '/like',
      method: 'post',
      query: {id},
      type: types.INCREMENT_LIKES
    }
  }  
}

export const searchPosts = (query) => {
  return {
    SEARCH: {
      query: query,
      type: types.SEARCH_POSTS
    }
  }  
};
