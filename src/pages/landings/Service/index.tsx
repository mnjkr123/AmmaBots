// component
import React from 'react';

import { Navbar1 } from '../../../components/navbars';
import { Hero8 } from '../../../components/heros';
import BackToTop from '../../../components/BackToTop';

import ClientsReview from './ClientsReview';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Pricing from './Pricing';
import Testimonial from './Testimonial';

// import TextToImageLanding from './text2image';

import Footer from './Footer';

// dummy data
import { features } from './data';

import { plans } from '../Saas/data';

const Service = () => {
    return (
        <>
            {/* header and hero */}
            <div className="header-2">
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-primary btn-sm" />
                <Hero8 />
            </div>

            {/* clients review */}
            <ClientsReview />

            {/* feature 1 */}
            <Feature1 />

            {/* feature 2 */}
            <Feature2 features={features} />

            {/* pricing */}
            <Pricing plans={plans} />

            {/* testimonila */}
            <Testimonial />

            {/* <TextToImageLanding /> */}

            {/* CTA + Footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Service;
