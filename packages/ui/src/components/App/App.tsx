import React from 'react';

const AuthApp = React.lazy(() => import('@grzegorzjudas/auth/App'));

export function App () {
    return (
        <>
            <h3>Main app</h3>
            <React.Suspense fallback="Loading auth...">
                <AuthApp text="Hello from UI app!" />
            </React.Suspense>
        </>
    );
}

export default App;
