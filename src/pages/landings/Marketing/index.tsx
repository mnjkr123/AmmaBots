// components
import { Navbar1 } from '../../../components/navbars';
import { Hero10 } from '../../../components/heros';
import BackToTop from '../../../components/BackToTop';

import Features1 from './Feature1';
import Features2 from './Features2';
import Features3 from './Features3';
import Features4 from './Features4';
import Testimonials from './Testimonials';
import Footer from './Footer';

// dummy data
import { features } from './data';

const Marketing = () => {
    return (
        <>
            {/* header and hero */}
            <div className="header-3">
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-primary btn-sm" />
                <Hero10 />
            </div>

            {/* features 1 */}
            <Features1 features={features} />

            {/* features 2 */}
            <Features2 />

            {/* features 3 */}
            <Features3 />

            {/* features 4 */}
            <Features4 />

            {/* testimonials */}
            <Testimonials />

            {/* CTA + Footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Marketing;
