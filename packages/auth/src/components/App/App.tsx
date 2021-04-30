import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { createVirtualHistory, generateRandomModuleId } from '@grzegorzjudas/util';

import { createStore } from '../../lib/store';
import UrlBar from '../../components/UrlBar';
import HomePage from '../../pages/HomePage';
import TestPage from '../../pages/TestPage';

import styles from '../../style.css';

const store = createStore();

export type Props = {
    name?: string;
    path?: string;
    text?: string;
    onButtonClicked?: () => void;
}

export function App (props: Props) {
    const ref = useRef<HTMLStyleElement>();
    const [ jss, setJss ] = useState(null);
    const history = useMemo(() => {
        return createVirtualHistory(props.name || generateRandomModuleId(), props.path);
    }, []);

    useEffect(() => {
        const jss = create({
            ...jssPreset(),
            insertionPoint: ref.current
        });

        setJss(jss);
    }, [ ref ]);

    return (
        <div>
            <style ref={ref}>
                {styles}
            </style>
            {jss && (
                <StylesProvider jss={jss}>
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
                </StylesProvider>
            )}
        </div>
    );
}

export default App;
