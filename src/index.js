import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import {AppContainer} from 'react-hot-loader';

import App from './App';

const element = document.getElementById('app');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    element
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}