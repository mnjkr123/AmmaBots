import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';

const Features = () => {
    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
            <Container>
                <Row className="align-items-center mb-6 pb-lg-5">
                    <Col lg={5}>
                        <div className="mb-4 mb-lg-0">
                            <Badge pill bg="" className="badge-soft-danger px-2 py-1">
                                Feature
                            </Badge>
                            <h1 className="display-4 fw-medium mb-3">Automate everything</h1>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                You don't need to manully follow up with your visitors. The Prompt takes care of it and
                                follow up automatically with them to understand their needs
                            </p>
                            <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src={desktop1}
                            alt="desktop1"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div
                            className="bg-white p-2 rounded border shadow mb-lg-0 mb-3"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        >
                            <img src={desktop} alt="desktop" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0">
                            <h1 className="display-4 fw-medium mb-3">Auto-tune your marketing campaigns</h1>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                The prompts keeps an eye on your all marketting effort and auto tune the marketing
                                campaigns settings to make them perform better
                            </p>
                            <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
