import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// swiper
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// types
import { Testimonial } from './types';

type TestimonialsProps = {
    testimonials: Testimonial[];
};

const SwiperSlider = ({ testimonials }: TestimonialsProps) => {
    const swiperConfig = {
        loop: true,
        spaceBetween: 24,
        autoplay: { delay: 5000 },
        breakpoints: {
            '576': { slidesPerView: 1 },
            '768': { slidesPerView: 2 },
        },
        roundLengths: true,
        navigation: { nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' },
    };

    return (
        <Swiper modules={[Pagination, Autoplay, Navigation]} {...swiperConfig}>
            {(testimonials || []).map((testimonials, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <Card className="mb-0 shadow border">
                            <Card.Body className="p-md-5">
                                <h5 className="fw-normal mb-4 mt-0">{testimonials.statement}</h5>
                                <div className="d-flex text-align-start">
                                    <img
                                        src={testimonials.customer.avatar}
                                        alt="avtar"
                                        className="me-2 rounded-circle"
                                        height="36"
                                    />
                                    <div className="flex-grow-1">
                                        <h6 className="m-0">{testimonials.customer.name}</h6>
                                        <p className="my-0 text-muted fs-13">{testimonials.customer.designation}</p>
                                    </div>
                                    <img src={testimonials.logo} alt="logo" height="32" />
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
    return (
        <section className="section py-4 py-sm-7 position-relative overflow-hidden" data-aos="fade-up">
            <Container className="testimonials-3">
                <Row className="align-items-center">
                    <Col>
                        <h1 className="display-5 fw-medium">See what our members are saying</h1>
                    </Col>
                    <Col xs={'auto'} className="col-auto text-sm-end pt-2 pt-sm-0">
                        <div className="navigations">
                            <Button variant="link" className="text-orange p-0 swiper-custom-prev">
                                <FeatherIcon icon="arrow-left" className="icon-dual" />
                            </Button>
                            <Button variant="link" className="text-orange p-0 swiper-custom-next">
                                <FeatherIcon icon="arrow-right" className="icon-dual" />
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-3 mt-sm-5">
                    <Col>
                        <div className="slider">
                            <SwiperSlider testimonials={testimonials} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
