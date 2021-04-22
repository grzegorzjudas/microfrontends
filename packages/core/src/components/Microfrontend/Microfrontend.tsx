import React, { PropsWithChildren, ReactNode, Suspense } from 'react';
import { ReactReduxContext } from 'react-redux';
import root from 'react-shadow';

import ErrorBoundary from '../../components/ErrorBoundary';

// const SandboxContext = createContext(null);

type Props = PropsWithChildren<{
    fallback?: ReactNode;
    failure?: ReactNode;
}>;

export function Microfrontend (props: Props) {
    const { fallback = 'Loading...', failure = 'Error!' } = props;

    return (
        <ErrorBoundary fallback={failure}>
            <ReactReduxContext.Consumer>
                {() => (
                    <ReactReduxContext.Provider value={null}>
                        <Suspense fallback={fallback}>
                            <root.div>
                                {props.children}
                            </root.div>
                        </Suspense>
                    </ReactReduxContext.Provider>
                )}
            </ReactReduxContext.Consumer>
        </ErrorBoundary>
    );
}

export default Microfrontend;
