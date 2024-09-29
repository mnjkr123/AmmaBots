// components

import React from 'react';
import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { Footer1 } from 'components/footer';

import Hero from './Hero';
import PricingPlans from './PricingPlans';
import CTA from './CTA';

// dummy data
import { plans } from './data';

const Pricing = () => {
    return (
        <>
            <div>
                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />
                <Hero />
            </div>

            {/* plans */}
            <PricingPlans plans={plans} />

            {/* cta */}
            <CTA />

            {/* footer */}
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default Pricing;
