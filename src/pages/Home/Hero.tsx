import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Typist from 'react-text-typist';

// swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import Image from 'next/image'; // Import Image from next/image
import saas1 from 'assets/images/hero/saas1.jpg';
import saas2 from 'assets/images/hero/saas2.jpg';
import saas3 from 'assets/images/hero/saas3.jpg';

const SwiperSlider = () => {
    const swiperConfig = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: true,
        breakpoints: {
            '576': { slidesPerView: 1.2 },
            '768': { slidesPerView: 1 },
        },
        roundLengths: true,
    };

    const images = [saas1, saas2, saas3];

    return (
        <Swiper modules={[Autoplay]} {...swiperConfig}>
            {images.map((img, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <Image
                            src={img}
                            alt={`Slide ${index + 1}`} // Provide a meaningful alt text for accessibility
                            className="img-fluid rounded-lg"
                            layout="responsive" // Ensures the image maintains its aspect ratio
                            width={600} // Set a width (adjust according to your design)
                            height={400} // Set a height (adjust according to your design)
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

const Hero = () => {
    return (
        <section className="position-relative hero-13 overflow-hidden pt-7 pt-lg-6 pb-5">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div className="mb-lg-0">
                            <h1 className="hero-title">
                                A modern look and feel for your{' '}
                                <Typist
                                    className="highlight highlight-success d-inline-block"
                                    sentences={[
                                        'saas',
                                        'mobile app',
                                        'software',
                                        'startup',
                                        'agency',
                                        'portfolio',
                                        'coworking',
                                        'crypto',
                                        'marketing',
                                    ]}
                                    typingSpeed={100}
                                    deletingSpeed={60}
                                    cursorSmooth
                                />
                            </h1>

                            <p className="fs-18 text-muted pt-3">
                                Make your website or web application stand out with high-quality landing pages designed
                                and developed by professionals.
                            </p>

                            <div className="pt-3 pt-sm-5 mb-4 mb-lg-0">
                                <a href="#demos" className="btn btn-primary" data-toggle="smooth-scroll">
                                    View Demos
                                    <FeatherIcon className="ms-2 icon icon-xxs" icon="arrow-down" />
                                </a>
                                <Link to="/docs/introduction" className="btn btn-link text-primary fw-semibold ms-2">
                                    Documentation
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }} className="hero-right">
                        <div className="img-container">
                            <div className="slider">
                                <SwiperSlider />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
