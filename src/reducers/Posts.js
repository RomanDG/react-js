import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  posts: [],
  searchStr: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS: return Object.assign({},state, {posts: action.response});
    case types.INCREMENT_LIKES:     return Object.assign({},state, state.posts[action.id - 1].metaData.currentLike += 1);
    case types.SEARCH_POSTS:        return Object.assign({},state, {searchStr: action.query});
    default:                        return state;
  }
};