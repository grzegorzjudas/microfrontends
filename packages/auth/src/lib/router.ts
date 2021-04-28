import { createMemoryHistory } from 'history';

export function createVirtualHistory (persistenceKey: string, initialPath: string = '/') {
    const key = `location_${persistenceKey}`;
    const history = createMemoryHistory();

    if (!localStorage.getItem(key)) localStorage.setItem(key, initialPath);

    history.replace(localStorage.getItem(key));

    history.listen((location) => {
        localStorage.setItem(key, location.pathname);
    });

    return history;
}
