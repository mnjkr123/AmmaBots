// component
import { Navbar1 } from 'components/navbars';
import { Hero5 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import Services from './Services';
import Portfolios from './Portfolio';
import Clients from './Clients';
import Blog from './Blog';
import Vacancies from './Vacancies';
import Footer from './Footer';

// dummy data
import { blogPosts, jobDetails, services } from './data';
import { projects } from '../Portfolio/data';

const Agency = () => {
    return (
        <>
            {/* header and hero */}
            <div className="header-4">
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-secondary btn-sm" />
                <Hero5 />
            </div>

            {/* services */}
            <Services services={services} />

            {/* portfolio */}
            <Portfolios portfolios={projects} />

            {/* client */}
            <Clients />

            {/* blog */}
            <Blog blogs={blogPosts} />

            {/* opening */}
            <Vacancies jobDetails={jobDetails} />

            {/* footer */}
            <Footer />

            <BackToTop variant="secondary" />
        </>
    );
};

export default Agency;
