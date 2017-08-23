import * as types from 'constants/actionTypes/PostsActionTypes';
import update from 'immutability-helper';


const initialState = {
  posts: {},
  searchStr: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS: return Object.assign({},state, {posts: action.response});
    case types.INCREMENT_LIKES:     return Object.assign({},state, {posts: state.posts.map((post) => post.id == action.response ? 
      update(post, { metaData: { currentLike: { $set: post.metaData.currentLike += 1 } } }) : post)});
    case types.UPDATE_POST: 
      const response = JSON.parse(action.response); 
      return Object.assign({},state, {posts: state.posts.map((post) => post.id == response.id ? 
        update(post, { text: { $set: response.text } }) : post)});   
    case types.SEARCH_POSTS:        return Object.assign({},state, {searchStr: action.query});

    default:                        return state;
  }
};