import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  entries: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS: return Object.assign({},state, {entries: action.response});
    default:                        return state;
  }
};