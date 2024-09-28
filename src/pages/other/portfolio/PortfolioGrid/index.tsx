import { Container } from 'react-bootstrap';

// component
import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { Footer1 } from 'components/footer';

import Hero from './Hero';
import Gallery from './Gallery';

// dummy data
import { galleryItems } from './data';

const PortfolioGrid = () => {
    return (
        <>
            {/* header */}
            <div>
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-secondary btn-sm" />
                <Hero />
            </div>

            {/* gallery */}
            <section className="overflow-hidden py-5 py-md-6 py-lg-7">
                <Container>
                    <Gallery galleryItems={galleryItems} />
                </Container>
            </section>

            {/* footer */}
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default PortfolioGrid;
