import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

// routes
import Routes from './routes/Routes';

// helpers
import { configureFakeBackend } from './helpers';

// Themes
import './assets/scss/theme.scss';

const App: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    configureFakeBackend();

    return <Routes />;
};

export default App;
