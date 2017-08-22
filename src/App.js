import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from 'components/layouts/MainLayout';
import { Provider } from 'react-redux';
import createStore from 'store';
import { ConnectedRouter as Router } from 'connected-react-router';
import { routes } from 'routes';
import {history} from 'components/helpers/history';
import { matchPath } from 'react-router';
import prepareData from 'components/helpers/prepareData';

const store = createStore(window.__INITIAL_STATE__);

function historyCb(location) {
  routes.map((route) => {
    const match = matchPath(location.pathname, route);

    if (match && match.isExact) {
      const state = { location, params: match.params, route };
      return prepareData(store, state);
    }
  });
}

history.listen((location) => {
  historyCb(location);
});

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <MainLayout>
        <Switch>
          {routes.map((route, index) => (<Route key={index} {...route} />))}
        </Switch>
      </MainLayout>
    </Router>
  </Provider>
);

export default App;