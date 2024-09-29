import React from 'react';

import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// component
import { SwiperSlider4 } from 'components/sliders';

// dummy data
import { slides } from 'components/sliders/data';

const Testimonial = () => {
    return (
        <section className="section pt-5 pb-6 py-sm-8 mb-5 mb-sm-0 bg-gradient3 position-relative testimonials-1">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Testimonials
                        </Badge>
                        <h1 className="display-5 fw-medium">What People Say</h1>
                    </Col>
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
                <Row className="mt-3 mt-sm-5">
                    <Col>
                        <div className="slider">
                            <SwiperSlider4 slides={slides} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;
