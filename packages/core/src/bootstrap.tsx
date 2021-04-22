import React from 'react';
import Thunk from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, compose, Store, applyMiddleware } from 'redux';

import { ReduxState } from './type/Redux';

import App from './components/App';
import reducers from './reducers';

import './style.css';

const composer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const store: Store<ReduxState> = createStore(reducers, {}, composer(applyMiddleware(Thunk)));

render(<App store={store} />, document.getElementById('app'));
