import * as types from 'constants/actionTypes/PieChartActionTypes';

const add = (data) => ({
  type: types.ADD_DATA,
  data
});

const init = () => ({
  type: types.INIT_TODO
});

export const addData = (data) => dispatch => {
  dispatch(add(data));
};

export const Initialize = () => dispatch => {
  dispatch(init());
};