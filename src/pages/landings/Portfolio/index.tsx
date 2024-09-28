// components
import { Navbar1 } from 'components/navbars';
import { Hero3 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import Services from './Services';
import Projects from './Projects';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

// dummy data
import { projects, services } from './data';

const Portfolio = () => {
    return (
        <>
            {/* header and hero */}
            <div className="header-6">
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-secondary btn-sm" />
                <Hero3 />
            </div>

            {/* services */}
            <Services services={services} />

            {/* projects */}
            <Projects projects={projects} />

            {/* testimonials */}
            <Testimonials />

            {/* cta */}
            <CTA />

            {/* footer*/}
            <Footer />

            <BackToTop variant="danger" />
        </>
    );
};

export default Portfolio;
