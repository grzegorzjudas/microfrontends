import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}>;

export function Button (props: Props) {
    return (
        <button name="test" onClick={props.onClick || null}>{props.children}</button>
    );
}

export default Button;
