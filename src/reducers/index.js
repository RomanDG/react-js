import { combineReducers, applyMiddleware} from 'redux';

import posts from './Posts';
import piechart from './PieChart';

export default combineReducers({
  piechart,
  posts
});