import React, { PropsWithChildren, ReactNode, Suspense } from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';

type Props = PropsWithChildren<{
    fallback?: ReactNode;
    failure?: ReactNode;
}>;

export function Microfrontend (props: Props) {
    const { fallback = 'Loading...', failure = 'Error!' } = props;

    return (
        <ErrorBoundary fallback={failure}>
            <Suspense fallback={fallback}>
                {props.children}
            </Suspense>
        </ErrorBoundary>
    );
}

export default Microfrontend;
