const createHistory = __CLIENT__ ? require('history').createBrowserHistory : require('history').createMemoryHistory;
export const history = createHistory();