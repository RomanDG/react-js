import React from 'react';
import {Route} from 'react-router-dom';
import MainLayout from 'components/layouts/MainLayout';
import {Provider} from 'react-redux';
import createStore, {history} from 'store';
import { ConnectedRouter as Router } from 'connected-react-router';
import {routes} from 'routes';

const store = createStore(window.__INITIAL_STATE__);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <MainLayout> 
        {routes.map((route, index) => (<Route key = {index} {...route}/>))}
      </MainLayout>
    </Router>
  </Provider>
);

export default App;