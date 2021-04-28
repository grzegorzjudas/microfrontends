import React from 'react';
import { useLocation } from 'react-router';

export function UrlBar () {
    const location = useLocation();

    return (
        <>
            <span>URL:</span>
            <div className="url">{location.pathname}</div>
        </>
    );
}

export default UrlBar;
