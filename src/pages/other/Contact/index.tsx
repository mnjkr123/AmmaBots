// components
import React from 'react';

import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { Footer2 } from 'components/footer';

import Hero from './Hero';
import ContactUs from './ContactUs';

const Contact = () => {
    return (
        <>
            <div className="header-7 bg-gradient2">
                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />

                <Hero />
            </div>

            {/* contact us */}
            <ContactUs />

            {/* footer */}
            <Footer2 />

            <BackToTop />
        </>
    );
};

export default Contact;
