import { combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';

import posts from './Posts';

export default combineReducers({
  posts,
  form: formReducer
});