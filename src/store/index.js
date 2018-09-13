import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { ENV } from '../config/constants';
import films from './films';

export const history = createHistory();

const reducers = combineReducers({
  films,
  router: routerReducer,
});

const middlewares = [thunk, routerMiddleware(history)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

if (ENV !== 'production' && module.hot) {
  module.hot.accept('./', () => store.replaceReducer(reducers));
}
