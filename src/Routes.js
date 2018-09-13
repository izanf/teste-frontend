import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store';
import Home from './pages/Home';

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
