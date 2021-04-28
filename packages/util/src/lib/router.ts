import { createMemoryHistory } from 'history';

const persistencePrefix = 'location_';

export function createVirtualHistory (persistenceKey: string, initialPath: string = '/') {
    const key = `${persistencePrefix}${persistenceKey}`;
    const history = createMemoryHistory();

    if (!localStorage.getItem(key)) localStorage.setItem(key, initialPath);

    history.replace(localStorage.getItem(key));

    history.listen((location) => {
        localStorage.setItem(key, location.pathname);
    });

    return history;
}

export function clearLocationPersistence (persistenceKey: string) {
    const key = `${persistencePrefix}${persistenceKey}`;

    localStorage.removeItem(key);
}
