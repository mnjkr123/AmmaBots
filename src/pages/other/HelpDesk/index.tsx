import { Col, Container, Row } from 'react-bootstrap';

// components
import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import HelpLinks from './HelpLinks';
import FAQs from './FAQs';
import SupportCenter from './SupportCenter';
import Footer from './Footer';

// dummy data
import { helpLinks } from './data';

const HelpDesk = () => {
    return (
        <>
            <div>
                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />
                <Hero />
            </div>

            <section className="section py-5 py-lg-8 mb-5 mb-sm-0 position-relative">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <HelpLinks helpLinks={helpLinks} />
                            <FAQs />
                        </Col>
                        <Col lg={4}>
                            <SupportCenter />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default HelpDesk;
