import * as types from 'constants/actionTypes/PostsActionTypes';

// получение всех постов
export const fetchPosts = () => {
  return {
    'API_CALL': {
      type: types.FETCH_POSTS_SUCCESS
    }
  }
};

// инкремент лайков в постах
export const incrementLikes = (id) => {
  return {
    'API_CALL': {
      type: types.INCREMENT_LIKES,
      id
    }
  }  
}

// поиск по постам
export const searchPosts = (query) => {
  return {
    'API_CALL': {
      type: types.SEARCH_POSTS,
      query
    }
  }  
};
