// components
import { Navbar1 } from 'components/navbars';
import { Hero2 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import About from './About';
import Features from './Features';
import SpaceOptions from './SpaceOptions';
import Testimonials from './Testimonials';
import Footer from './Footer';

// dummy data
import { features, spaceOptions, testimonials } from './data';

const Coworking = () => {
    return (
        <>
            <div className="header-5">
                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-orange btn-sm"
                />
                <Hero2 />
            </div>

            {/* about */}
            <About />

            {/* features */}
            <Features features={features} />

            {/* options */}
            <SpaceOptions spaceOptions={spaceOptions} />

            {/* testimonials */}
            <Testimonials testimonials={testimonials} />

            {/* footer */}
            <Footer />

            <BackToTop variant="orange" />
        </>
    );
};

export default Coworking;
