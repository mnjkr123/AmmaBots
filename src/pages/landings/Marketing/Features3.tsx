import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Features3 = () => {
    return (
        <section className="my-lg-5 py-5 marketing-3 position-relative">
            <Container>
                <Row className="align-items-center" data-aos="fade-up">
                    <Col lg={7}>
                        <Row className="justify-content-center">
                            <Col>
                                <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary mb-4">
                                    <FeatherIcon icon="settings" className="icon-dual-primary" />
                                </span>
                                <h1 className="display-5 fw-semibold">Advanced Features</h1>
                                <p className="text-muted my-4">
                                    Aenean sagittis tellus lacus, nec aliquet mi gravida at. Aenean velit purus,
                                    consectetur ut lobortis ac, dignissim id mi.
                                </p>

                                <Link to="#" className="h6 text-primary my-0">
                                    Learn more
                                    <FeatherIcon icon="arrow-right" className="ms-2 icon-xxs" />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <Card className="border rounded shadow mt-4 mt-lg-0">
                            <div className="p-5">
                                <h6 className="fw-medium fs-15 mb-4">
                                    <FeatherIcon icon="check-circle" className="icon-xs icon-dual-success me-2" />
                                    Unlimited
                                </h6>
                                <h6 className="fw-medium fs-15 mb-4">
                                    <FeatherIcon icon="check-circle" className="icon-xs icon-dual-success me-2" />
                                    Detailed
                                </h6>
                                <h6 className="fw-medium fs-15 mb-4">
                                    <FeatherIcon icon="check-circle" className="icon-xs icon-dual-success me-2" />
                                    Auto Schedule
                                </h6>
                                <h6 className="fw-medium fs-15 mb-4">
                                    <FeatherIcon icon="check-circle" className="icon-xs icon-dual-success me-2" />
                                    Smart
                                </h6>
                                <h6 className="fw-medium fs-15 mb-4">
                                    <FeatherIcon icon="check-circle" className="icon-xs icon-dual-success me-2" />
                                    Notifications
                                </h6>
                                <h6 className="fw-medium fs-15 mb-0">
                                    <FeatherIcon icon="check-circle" className="icon-xs icon-dual-success me-2" />
                                    And More
                                </h6>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features3;
