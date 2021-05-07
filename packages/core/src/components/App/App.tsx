import React, { useState } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Microfrontend, dynamicImport } from '@grzegorzjudas/util';

import HomePage from '../../pages/HomePage';
import InfoPage from '../../pages/InfoPage';

const AuthApp = React.lazy(() => dynamicImport('@grzegorzjudas/auth/App'));

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
                    <Link to="/empty"><button>Empty</button></Link>
                </nav>
                <Switch>
                    <Route exact path="/" render={() => <HomePage clicks={clicks} />} />
                    <Route exact path="/info" component={InfoPage} />
                </Switch>
                <Switch>
                    <Route exact path="/empty" render={() => <p>Nothing here.</p>} />
                    <Route render={() => (
                        <section className="microfrontend">
                            <Microfrontend name="auth" loading="Loading auth..." failure="Could not load microfrontend. Is it running?">
                                <AuthApp text="Passed from core!" onButtonClicked={onButtonClicked} path="/" />
                            </Microfrontend>
                        </section>
                    )} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
