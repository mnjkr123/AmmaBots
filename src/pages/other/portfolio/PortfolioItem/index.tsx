// component
import { Navbar1 } from 'components/navbars';
import { Footer1 } from 'components/footer';

import Hero from './Hero';
import Content from './Content';
import Testimonial from './Testimonials';

// dummy data
import { workImages } from './data';
import Navigation from './Navigation';

const PortfolioItem = () => {
    return (
        <>
            {/* header */}
            <div>
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-secondary btn-sm" />
                <Hero />
            </div>

            {/* content */}
            <Content workImages={workImages} />

            {/* testimonial */}
            <Testimonial />

            {/* navigation */}
            <Navigation />

            {/* footer */}
            <Footer1 />
        </>
    );
};

export default PortfolioItem;
