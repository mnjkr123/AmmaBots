// component
import { Navbar1 } from '../../../components/navbars';
import { Hero9 } from '../../../components/heros';
import BackToTop from '../../../components/BackToTop';
import { Footer1 } from '../../../components/footer';

import About from './About';
import Feature from './Feature';
import Counter from './Counter';
import Team from './Team';
import Client from './Client';

// dummy data
import { teamMembers } from './data';

const Company = () => {
    return (
        <>
            {/* header and hero */}
            <div>
                <Navbar1
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    hideSearch
                    fixedWidth
                />
                <Hero9 />
            </div>

            {/* about */}
            <About />

            {/* feature */}
            <Feature />

            {/* counter */}
            <Counter />

            {/* Team */}
            <Team teamMembers={teamMembers} />

            {/* client */}
            <Client />

            {/* footer */}
            <Footer1 />

            <BackToTop variant="info" />
        </>
    );
};

export default Company;
