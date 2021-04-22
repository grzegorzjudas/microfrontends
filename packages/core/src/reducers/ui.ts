import { AnyAction } from 'redux';

import { ReduxActionType, StateUI } from '../type/Redux';

function getInitialState (): StateUI {
    return {
        text: 'Hello world!'
    };
}

export default function ui (state = getInitialState(), action: AnyAction): StateUI {
    switch (action.type) {
        case ReduxActionType.SET_TEXT: {
            return { ...state, text: action.text };
        }
        default: return state;
    }
}
