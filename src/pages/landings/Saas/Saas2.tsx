// components
import { Navbar3 } from 'components/navbars';
import { Hero11 } from 'components/heros';
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

const Saas2 = () => {
    return (
        <>
            <div>
                <Navbar3 navClass="navbar-light" isSticky={false} fixedWidth buttonClass="btn-primary btn-sm" />
                <Hero11 />
            </div>

            {/* features */}
            <Features1 features={features} containerClass="position-relative overflow-hidden py-4 pb-lg-7" />

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

export default Saas2;
