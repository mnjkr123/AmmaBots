import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useLogout, useUser } from '../../hooks/auth';

const Logout = () => {
    const [logout] = useLogout();
    const [loggedInUser] = useUser();

    useEffect(() => {
        logout();
    }, [logout]);

    return <>{loggedInUser && <Navigate to="/auth/login" replace />}</>;
};

export default Logout;
