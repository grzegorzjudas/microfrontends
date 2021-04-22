import React from 'react';
import { Provider } from 'react-redux';
import { Button } from '@grzegorzjudas/design-system';

import Text from '../../components/Text';
import { createStore } from '../../lib/store';

import styles from '../../style.css';

const store = createStore();

export type Props = {
    text?: string;
    onButtonClicked?: () => void;
}

export function App (props: Props) {
    return (
        <>
            <style>
                {styles}
            </style>
            <Provider store={store}>
                <Text prefix={props.text} />
                <Button label={'CLICK!'} />
            </Provider>
        </>
    );
}

export default App;
