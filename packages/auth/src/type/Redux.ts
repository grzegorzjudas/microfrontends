export enum ReduxActionType {
    SET_TEXT = 'SET_TEXT'
}

export type ReduxState = {
    ui: StateUI;
}

export type StateUI = {
    text: string;
}
