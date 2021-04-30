import React from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

type Props = ButtonProps;

export function Button (props: Props) {
    return (
        <MuiButton name="test" {...props}>{props.children}</MuiButton>
    );
}

export default Button;
