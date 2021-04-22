import React from 'react';

export type Props = {
    text: string;
}

export function App (props: Props) {
    return (
        <h3>{props.text}</h3>
    );
}

export default App;
