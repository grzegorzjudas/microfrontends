import React from 'react';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';

import { ReduxState } from '../../type/Redux';

const useSelector = reduxUseSelector as TypedUseSelectorHook<ReduxState>;

type Props = {
    prefix?: string;
}

export function Text (props: Props) {
    const text = useSelector((state) => state.ui.text);

    return (
        <h3>{props.prefix} {text}</h3>
    );
}

export default Text;
