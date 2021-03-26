import React from 'react';

const AuthApp = React.lazy(() => import('@homi/auth/App'));

export function App () {
    return (
        <>
            <h3>Main app</h3>
            <React.Suspense fallback="Loading auth...">
                <AuthApp />
            </React.Suspense>
        </>
    );
}

export default App;
