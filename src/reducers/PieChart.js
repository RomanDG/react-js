import * as types from 'constants/actionTypes/PieChartActionTypes';

const initialState = {
  data: [],
  isInitiated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_DATA:      return Object.assign({},state, {data: action.data});
    case types.INIT_TODO:     return Object.assign({},state, {isInitiated: true});
    default:                  return state;
  }
};