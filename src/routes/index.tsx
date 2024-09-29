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
const Service = React.lazy(() => import('../pages/landings/Service'));
const Chatbot = React.lazy(() => import('../pages/landings/Chatbot'));

// landings
const App = React.lazy(() => import('../pages/landings/App'));
const Saas = React.lazy(() => import('../pages/landings/Saas/Saas'));
const Saas2 = React.lazy(() => import('../pages/landings/Saas/Saas2'));
const Startup = React.lazy(() => import('../pages/landings/Startup'));
const Software = React.lazy(() => import('../pages/landings/Software'));

const Coworking = React.lazy(() => import('../pages/landings/Coworking'));
const Crypto = React.lazy(() => import('../pages/landings/Crypto'));
const Marketing = React.lazy(() => import('../pages/landings/Marketing'));

// pages
const Dashboard = React.lazy(() => import('../pages/other/account/Dashboard'));
const Settings = React.lazy(() => import('../pages/other/account/Settings'));

const Blog = React.lazy(() => import('../pages/other/Blog'));
const BlogPost = React.lazy(() => import('../pages/other/BlogPost'));

const Company = React.lazy(() => import('../pages/other/Company'));
const Contact = React.lazy(() => import('../pages/other/Contact'));
const Career = React.lazy(() => import('../pages/other/Career'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));

const PortfolioGrid = React.lazy(() => import('../pages/other/portfolio/PortfolioGrid'));
const PortfolioMasonry = React.lazy(() => import('../pages/other/portfolio/PortfolioMasonry'));
const PortfolioItem = React.lazy(() => import('../pages/other/portfolio/PortfolioItem'));

const HelpDesk = React.lazy(() => import('../pages/other/HelpDesk'));

// docs
const Introduction = React.lazy(() => import('../pages/docs/Introduction'));
const QuickStart = React.lazy(() => import('../pages/docs/QuickStart'));
const Customization = React.lazy(() => import('../pages/docs/Customization'));
const Routing = React.lazy(() => import('../pages/docs/Routing'));
const CodeSpliting = React.lazy(() => import('../pages/docs/CodeSpliting'));
const ChangeLog = React.lazy(() => import('../pages/docs/ChangeLog'));

const Colors = React.lazy(() => import('../pages/docs/Colors'));
const Typography = React.lazy(() => import('../pages/docs/Typography'));

const Bootstrap = React.lazy(() => import('../pages/docs/Bootstrap'));
const Custom = React.lazy(() => import('../pages/docs/Custom'));
const Plugins = React.lazy(() => import('../pages/docs/Plugins'));

const Navbars = React.lazy(() => import('../pages/docs/Navbars'));
const Heros = React.lazy(() => import('../pages/docs/Heros'));

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
                    path: 'docs',
                    children: [
                        { path: 'introduction', element: <LoadComponent component={Introduction} /> },
                        { path: 'quick-start', element: <LoadComponent component={QuickStart} /> },
                        { path: 'customization', element: <LoadComponent component={Customization} /> },
                        { path: 'routing', element: <LoadComponent component={Routing} /> },
                        { path: 'code-spliting', element: <LoadComponent component={CodeSpliting} /> },
                        { path: 'change-log', element: <LoadComponent component={ChangeLog} /> },

                        { path: 'colors', element: <LoadComponent component={Colors} /> },
                        { path: 'typography', element: <LoadComponent component={Typography} /> },
                        { path: 'bootstrap', element: <LoadComponent component={Bootstrap} /> },
                        { path: 'custom', element: <LoadComponent component={Custom} /> },
                        { path: 'plugins', element: <LoadComponent component={Plugins} /> },
                        { path: 'navbars', element: <LoadComponent component={Navbars} /> },
                        { path: 'heros', element: <LoadComponent component={Heros} /> },
                    ],
                },
                {
                    path: 'home',
                    element: <LoadComponent component={Home} />,
                },
                {
                    path: 'service',
                    element: <LoadComponent component={Service} />,
                },
                {
                    path: 'Chatbot',
                    element: <LoadComponent component={Chatbot} />,
                },
                {
                    path: 'landing',
                    children: [
                        { path: 'app', element: <LoadComponent component={App} /> },
                        { path: 'saas', element: <LoadComponent component={Saas} /> },
                        { path: 'saas2', element: <LoadComponent component={Saas2} /> },
                        { path: 'startup', element: <LoadComponent component={Startup} /> },
                        { path: 'software', element: <LoadComponent component={Software} /> },
                        { path: 'service', element: <LoadComponent component={Service} /> },
                        { path: 'service', element: <LoadComponent component={Service} /> },

                        { path: 'coworking', element: <LoadComponent component={Coworking} /> },
                        { path: 'crypto', element: <LoadComponent component={Crypto} /> },
                        { path: 'marketing', element: <LoadComponent component={Marketing} /> },
                    ],
                },
                {
                    path: 'pages',
                    children: [
                        {
                            path: 'blog',
                            children: [
                                { path: '', element: <LoadComponent component={Blog} /> },
                                { path: 'post', element: <LoadComponent component={BlogPost} /> },
                            ],
                        },
                        { path: 'company', element: <LoadComponent component={Company} /> },
                        { path: 'contact', element: <LoadComponent component={Contact} /> },
                        { path: 'career', element: <LoadComponent component={Career} /> },
                        { path: 'pricing', element: <LoadComponent component={Pricing} /> },
                        {
                            path: 'portfolio',
                            children: [
                                { path: 'grid', element: <LoadComponent component={PortfolioGrid} /> },
                                { path: 'masonry', element: <LoadComponent component={PortfolioMasonry} /> },
                                { path: 'item', element: <LoadComponent component={PortfolioItem} /> },
                            ],
                        },
                        { path: 'help', element: <LoadComponent component={HelpDesk} /> },
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
                            children: [
                                { path: 'dashboard', element: <LoadComponent component={Dashboard} /> },
                                { path: 'settings', element: <LoadComponent component={Settings} /> },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);
};

export default AllRoutes;
