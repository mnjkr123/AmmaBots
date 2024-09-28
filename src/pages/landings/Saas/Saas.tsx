// components
import { Navbar1 } from 'components/navbars';
import { Hero12 } from 'components/heros';
import BackToTop from 'components/BackToTop';
import { Footer1 } from 'components/footer';

import Features1 from './Features1';
import Features2 from './Features2';
import Features3 from './Features3';
import Clients from './Clients';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQs from './FAQs';

// dummy data
import { features, plans } from './data';

const Saas = () => {
    return (
        <>
            <div className="header-2 primary">
                <Navbar1
                    navClass="navbar-light zindex-10"
                    isSticky={false}
                    fixedWidth
                    hideSearch
                    buttonClass="btn-primary btn-sm"
                />
                <Hero12 />
            </div>

            {/* features */}
            <Features1 features={features} containerClass="position-relative overflow-hidden pt-lg-6 py-4 pb-lg-7" />

            <Features2 />

            <Features3 />

            {/* clients */}
            <Clients />

            {/* testimonials */}
            <Testimonials />

            {/* pricing */}
            <Pricing plans={plans} />

            {/* FAQs */}
            <FAQs />

            {/* footer */}
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default Saas;
