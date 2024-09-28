// components
import { Navbar3 } from 'components/navbars';
import { Hero1 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import Features1 from './Features1';
import Features2 from './Features2';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

// dummy data
import { features, features2 } from './data';

const App = () => {
    return (
        <>
            {/* header and hero */}
            <section>
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-orange btn-sm" />
                <Hero1 />
            </section>

            {/* features */}
            <Features1 features={features} />

            {/* features2 */}
            <Features2 features2={features2} />

            {/* testimonials */}
            <Testimonials />

            {/* cta */}
            <CTA />

            {/* footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default App;
