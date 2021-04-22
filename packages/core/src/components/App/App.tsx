import React, { useState } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import Text from '../../components/Text';

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
            <React.Suspense fallback="Loading auth...">
                <AuthApp text="Passed from core!" onButtonClicked={onButtonClicked} />
            </React.Suspense>
        </Provider>
    );
}

export default App;
