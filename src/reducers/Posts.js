import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  PostsData: [],
  PieChartData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS: return Object.assign({},state, {PostsData: action.response});
    case types.ADD_PIECHART_DATA:   return Object.assign({},state, {PieChartData: action.data});
    default:                        return state;
  }
};