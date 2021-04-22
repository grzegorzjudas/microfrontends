
import Thunk from 'redux-thunk';
import { createStore as reduxCreateStore, compose, Store, applyMiddleware } from 'redux';

import { ReduxState } from '../type/Redux';

import reducers from '../reducers';

export function createStore () {
    const composer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    const store: Store<ReduxState> = reduxCreateStore(reducers, {}, composer(applyMiddleware(Thunk)));

    return store;
}
