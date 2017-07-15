import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/BlogPage';
//import {records} from 'constants/static/records';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' render={() => (<MainLayout><BlogPage /></MainLayout>)} />
      <Route path='/post/:id?' render={({match}) => (<MainLayout><BlogPage idp={match.params.id} /></MainLayout>)} />
    </div>
  </Router>
);

export default App;