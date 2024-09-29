import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import AllRoutes from '.';

const Routes = () => {
    return (
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    );
};

export default Routes;
