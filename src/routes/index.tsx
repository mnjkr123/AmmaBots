import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

// components
import Root from './Root';
import PrivateRoute from './PrivateRoute';

// lazy load all the views
// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const SignUp = React.lazy(() => import('../pages/auth/SignUp'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));

// home
const Home = React.lazy(() => import('../pages/Home'));
const Chatbot = React.lazy(() => import('../pages/landings/Chatbot'));

// landings

// pages
const Dashboard = React.lazy(() => import('../pages/other/account/Dashboard'));

const Pricing = React.lazy(() => import('../pages/other/Pricing'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            // root route
            path: '/',
            element: <Root />,
        },
        {
            // public routes
            path: '/',
            children: [
                {
                    path: 'auth',
                    children: [
                        { path: 'login', element: <LoadComponent component={Login} /> },
                        { path: 'signup', element: <LoadComponent component={SignUp} /> },
                        { path: 'forget-password', element: <LoadComponent component={ForgetPassword} /> },
                        { path: 'confirm', element: <LoadComponent component={Confirm} /> },
                        { path: 'logout', element: <LoadComponent component={Logout} /> },
                    ],
                },
                {
                    path: 'home',
                    element: <LoadComponent component={Home} />,
                },
                {},
                {
                    path: 'Chatbot',
                    element: <LoadComponent component={Chatbot} />,
                },
                {
                    path: 'landing',
                    children: [],
                },
                {
                    path: 'pages',
                    children: [
                        {
                            path: 'blog',
                            children: [],
                        },
                        { path: 'pricing', element: <LoadComponent component={Pricing} /> },
                        {
                            path: 'portfolio',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            // protected routes
            path: '/',
            element: <PrivateRoute roles={'Admin'} />,
            children: [
                {
                    path: 'pages',
                    children: [
                        {
                            path: 'account',
                            children: [{ path: 'dashboard', element: <LoadComponent component={Dashboard} /> }],
                        },
                    ],
                },
            ],
        },
    ]);
};

export default AllRoutes;
