import React from 'react';
import { Suspense } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

// helpers
import { APICore } from '../helpers/api/apiCore';

// hooks
import { useUser } from '../hooks/auth';

type PrivateRouteProps = {
    roles?: string;
};

// Loading component
const loading = () => <div className=""></div>;

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ roles }: PrivateRouteProps) => {
    let location = useLocation();
    const [loggedInUser] = useUser();
    const api = new APICore();

    /**
     * Not logged in, redirect to login page with the return url
     */
    if (!api.isUserAuthenticated()) {
        return <Navigate to={'/auth/login'} state={{ from: location }} replace />;
    }

    // Check if route is restricted by role
    if (roles && roles.indexOf(loggedInUser.role) === -1) {
        // Role not authorized, redirect to home page
        return <Navigate to={{ pathname: '/' }} />;
    }

    return (
        <Suspense fallback={loading()}>
            <Outlet />
        </Suspense>
    );
};

export default PrivateRoute;
