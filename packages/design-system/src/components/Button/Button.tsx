import React from 'react';

type Props = {
    label?: string;
}

export function Button (props: Props) {
    return (
        <button name="test">{props.label || 'Click me!'}</button>
    );
}

export default Button;
