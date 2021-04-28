import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createStore } from '../../lib/store';
import UrlBar from '../../components/UrlBar';
import HomePage from '../../pages/HomePage';
import TestPage from '../../pages/TestPage';

import styles from '../../style.css';
import { Redirect, Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';

const store = createStore();

export type Props = {
    text?: string;
    onButtonClicked?: () => void;
}

export function App (props: Props) {
    const history = useMemo(() => createMemoryHistory(), []);

    return (
        <>
            <style>
                {styles}
            </style>
            <Router history={history}>
                <Provider store={store}>
                    <UrlBar />
                    <nav>
                        <Link to="/"><button>Home</button></Link>
                        <Link to="/test"><button>Test</button></Link>
                    </nav>
                    <Switch>
                        <Route exact path="/" render={() => <HomePage text={props.text} onButtonClicked={props.onButtonClicked} /> } />
                        <Route exact path="/test" component={TestPage} />
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </Provider>
            </Router>
        </>
    );
}

export default App;
