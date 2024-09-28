// components
import { Navbar1 } from '../../../components/navbars';
import BackToTop from '../../../components/BackToTop';
import { Footer1 } from '../../../components/footer';

import Hero from './Hero';
import Benefits from './Benefits';
import Culture from './Culture';
import Vacancies from './Vacancies';
import CTA from './CTA';

// dummy data
import { benefits, gallery, vacancies } from './data';

const Career = () => {
    return (
        <>
            <div className="bg-gradient2 position-relative">
                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />

                <Hero />
            </div>

            {/* benefits */}
            <Benefits benefits={benefits} />

            {/* culture */}
            <Culture gallery={gallery} />

            {/* Job */}
            <Vacancies vacancies={vacancies} />

            {/* cta */}
            <CTA />

            {/* footer */}
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default Career;
