import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import Marketing from 'assets/images/features/marketing.jpg';

const Feature2 = () => {
    return (
        <section className="py-5 position-relative" data-aos="fade-up">
            <Container>
                <Row className="features-8">
                    <Col lg={12}>
                        <div className="position-relative">
                            <div className="feature-content">
                                <Card className="p-4 border rounded shadow mb-0">
                                    <div className="feature-text">
                                        <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary mb-2">
                                            <FeatherIcon icon="sliders" className="icon-dual-primary" />
                                        </span>
                                        <h4 className="text-dark">Smart Campaign Monitoring</h4>
                                        <p>
                                            Et harum quidem rerum facilis est et expedita distinctio at libero tempore
                                            cum soluta nobis est eligendi optio cumque.
                                        </p>
                                        <Link to="#" className="h6 text-primary my-0">
                                            Learn more
                                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xxs" />
                                        </Link>
                                    </div>
                                </Card>
                            </div>
                            <div className="mt-4 mt-sm-0 feature-img">
                                <div className="overlay"></div>
                                <img
                                    src={Marketing}
                                    alt="marketing"
                                    className="img-fluid d-block ms-auto rounded shadow"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Feature2;
