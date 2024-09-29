import React from 'react';
import { Navigate } from 'react-router-dom';

const Root = () => {
    const getRootUrl = () => {
        const url: string = 'home'; // Change from let to const

        return url;
    };

    const url = getRootUrl();

    return <Navigate to={`/${url}`} />;
};

export default Root;
