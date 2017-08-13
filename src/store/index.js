import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from 'reducers';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import ApiCallMid from 'middleware/API';
import SearchPosts from 'middleware/SearchPosts';

import createHistory from 'history/createMemoryHistory';
export const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(connectRouter(history)(reducers), composeWithDevTools(applyMiddleware(middleware, ApiCallMid, SearchPosts)));