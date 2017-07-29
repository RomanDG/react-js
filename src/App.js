import React from 'react';
import {Route} from 'react-router-dom';
import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/BlogPage';
import PostPath from 'components/helpers/PostPath';
import {Provider} from 'react-redux';
import {store, history} from 'store';
import { ConnectedRouter as Router } from 'connected-react-router';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <MainLayout> 
        <Route exact path='/' component={BlogPage} />
        <Route path={PostPath()}  component={BlogPage} />
      </MainLayout>
    </Router>
  </Provider>
);

export default App;