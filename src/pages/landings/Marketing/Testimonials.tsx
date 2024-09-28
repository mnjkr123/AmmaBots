import { Badge, Button, Col, Container, Row } from 'react-bootstrap';

// components
import { SwiperSlider2 } from 'components/sliders';

// dummy data
import { slides } from 'components/sliders/data';
import FeatherIcon from 'feather-icons-react';

const Testimonials = () => {
    return (
        <section className="section pt-lg-8 pb-lg-7 py-6 position-relative features-4" data-aos="fade-up">
            <Container>
                <Row className="testimonials-2">
                    <Col lg={3}>
                        <Row className="align-items-center">
                            <Col>
                                <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                                    Feedback
                                </Badge>
                                <h1 className="display-5 fw-semibold">Trusted by 2500+ customers</h1>
                                <p className="text-muted mx-auto">Some valuables words from our customers.</p>
                            </Col>
                        </Row>
                        <Row className="mt-3 mb-4 mb-lg-0">
                            <Col xs="auto" className="text-sm-end pt-2 pt-sm-0">
                                <div className="navigations">
                                    <Button variant="link" className="text-normal p-0 swiper-custom-prev">
                                        <FeatherIcon icon="arrow-left" className="icon-dual" />
                                    </Button>
                                    <Button variant="link" className="text-normal p-0 swiper-custom-next">
                                        <FeatherIcon icon="arrow-right" className="icon-dual" />
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{ span: 8, offset: 1 }}>
                        <div className="slider">
                            <SwiperSlider2 slides={slides} hasLogo />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
