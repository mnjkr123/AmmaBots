// components
import { Navbar3 } from 'components/navbars';
import { Hero4 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import ClientsReview from './ClientsReview';
import Features from './Features';
import Integrations from './Integration';
import Pricing from './Pricing';
import Footer from './Footer';

// data
import { integrations, planFeatures } from './data';

const Startup = () => {
    return (
        <>
            <div className="header-7">
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero4 />
            </div>

            {/* clients - reviews  */}
            <ClientsReview />

            {/* features */}
            <Features />

            {/* integration */}
            <Integrations integrations={integrations} />

            {/* pricing */}
            <Pricing planFeatures={planFeatures} />

            {/* CTA - footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Startup;
