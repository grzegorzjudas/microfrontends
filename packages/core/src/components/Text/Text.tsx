import React from 'react';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';

import { ReduxState } from '../../type/Redux';

const useSelector = reduxUseSelector as TypedUseSelectorHook<ReduxState>;

export function Text () {
    const text = useSelector((state) => state.ui.text);

    return (
        <h3>{text}</h3>
    );
}

export default Text;
