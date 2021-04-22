import React, { useState } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import Text from '../../components/Text';
import Microfrontend from '../../components/Microfrontend';

import reactLogo from '../../../assets/images/react-logo.svg';

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
            <Text />
            <img src={reactLogo} width={200} height={141} alt="React logo" />
            <h4>You have clicked {clicks} times.</h4>
            <section className="microfrontend">
                <Microfrontend fallback="Loading auth..." failure="Could not load microfrontend. Is it running?">
                    <AuthApp text="Passed from core!" onButtonClicked={onButtonClicked} />
                </Microfrontend>
            </section>
        </Provider>
    );
}

export default App;
