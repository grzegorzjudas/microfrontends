import React from 'react';
import { Provider } from 'react-redux';

import Text from '../../components/Text';
import { createStore } from '../../lib/store';

const store = createStore();

export type Props = {
    text?: string;
    onButtonClicked?: () => void;
}

export function App (props: Props) {
    return (
        <Provider store={store}>
            <Text prefix={props.text} />
            <button onClick={props.onButtonClicked}>Click me</button>
        </Provider>
    );
}

export default App;
