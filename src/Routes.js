import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store';
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/filme/:id" component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
