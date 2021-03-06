import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from 'reducers';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import ApiCallMid from 'middleware/API';
import SearchPosts from 'middleware/SearchPosts';
import {history} from 'components/helpers/history';

const middleware = routerMiddleware(history);

export default (initialState) => createStore(connectRouter(history)(reducers), initialState, composeWithDevTools(applyMiddleware(middleware, ApiCallMid, SearchPosts)));