// components
import React from 'react';
import Navbar1 from '../../components/navbars/Navbar1';
import BackToTop from '../../components/BackToTop';

import Hero from './Hero';
import Demos from './Demos';
import InnerPages from './InnerPages';
import AccountPages from './AccountPages';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';

// dummy data
import { landings, secondaryPages, accountPages, features } from './data';

const Home = () => {
    return (
        <>
            <div className="bg-gradient3">
                <Navbar1
                    navClass="bg-white navbar-light zindex-10"
                    hideSearch
                    isSticky
                    fixedWidth
                    buttonClass="btn-outline-primary btn-sm"
                />

                {/* hero */}
                <Hero />
            </div>

            {/* demos */}
            <Demos landings={landings} />

            {/* secondary pages */}
            <InnerPages pages={secondaryPages} />

            {/* auth pages */}
            <AccountPages pages={accountPages} />

            {/* features */}
            <Features features={features} />

            {/* cta */}
            <CTA />

            {/* footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Home;
