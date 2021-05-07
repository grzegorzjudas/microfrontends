import React from 'react';
import { render } from 'react-dom';

import { createStore } from './lib/store';
import App from './components/App';

import './style.css';

const store = createStore();

render(<App store={store} />, document.getElementById('app'));

window.__remotes__ = {
    '@grzegorzjudas/auth': 'auth@http://localhost:9001/remoteEntry.js'
};

if (module.hot) {
    /* eslint-disable @typescript-eslint/no-var-requires */

    module.hot.accept('./components/App', () => {
        const NewApp = require('./components/App').default;

        render(<NewApp store={store} />, document.getElementById('app'));
    });

    module.hot.accept('./reducers', () => {
        const newReducer = require('./reducers').default;

        store.replaceReducer(newReducer);
    });

    module.hot.accept();

    /* eslint-enable @typescript-eslint/no-var-requires */
}
