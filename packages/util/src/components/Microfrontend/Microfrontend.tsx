import React, { PropsWithChildren, ReactNode, Suspense, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import root from 'react-shadow';

import ErrorBoundary from '../../components/ErrorBoundary';

type Props = PropsWithChildren<{
    name: string;
    loading?: ReactNode;
    failure?: ReactNode;
}>;

export function Microfrontend (props: Props) {
    const { loading = 'Loading...', failure = 'Error!' } = props;

    const children = React.Children.map(props.children, (child) => {
        if ([ 'string', 'number', 'boolean' ].includes(typeof child)) return child;

        if ((child as any).type.$$typeof === Symbol.for('react.lazy')) {
            return React.cloneElement(child as React.ReactElement, {
                name: props.name
            });
        }

        return child;
    });

    useEffect(() => {
        return () => {
            localStorage.removeItem(`location_${props.name}`);
        };
    }, []);

    return (
        <ErrorBoundary fallback={failure}>
            <ReactReduxContext.Consumer>
                {() => (
                    <ReactReduxContext.Provider value={null}>
                        <Suspense fallback={loading}>
                            <root.div>
                                {children}
                            </root.div>
                        </Suspense>
                    </ReactReduxContext.Provider>
                )}
            </ReactReduxContext.Consumer>
        </ErrorBoundary>
    );
}

export default Microfrontend;
