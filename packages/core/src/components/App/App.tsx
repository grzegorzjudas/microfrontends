import React, { useState } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import Text from '../../components/Text';
import Microfrontend from '../../components/Microfrontend';
import HomePage from '../../pages/HomePage';
import InfoPage from '../../pages/InfoPage';

const AuthApp = React.lazy(() => import('@grzegorzjudas/auth/App'));

type Props = {
    store: Store;
}

export function App (props: Props) {
    const [ clicks, setClicks ] = useState(0);

    function onButtonClicked () {
        setClicks((clicks) => clicks + 1);
    }

    return (
        <Provider store={props.store}>
            <BrowserRouter>
                <nav>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/info"><button>Info</button></Link>
                </nav>
                <Switch>
                    <Route exact path="/" render={() => <HomePage clicks={clicks} />} />
                    <Route exact path="/info" component={InfoPage} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
                <Text />
                <section className="microfrontend">
                    <Microfrontend fallback="Loading auth..." failure="Could not load microfrontend. Is it running?">
                        <AuthApp text="Passed from core!" onButtonClicked={onButtonClicked} />
                    </Microfrontend>
                </section>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
