import React, { useState } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import Text from '../../components/Text';
import Microfrontend from '../../components/Microfrontend';

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
            <h5>You have clicked {clicks} times.</h5>
            <Microfrontend fallback="Loading auth..." failure="Could not load microfrontend. Is it running?">
                <AuthApp text="Passed from core!" onButtonClicked={onButtonClicked} />
            </Microfrontend>
        </Provider>
    );
}

export default App;
