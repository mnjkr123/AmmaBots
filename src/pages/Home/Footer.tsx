import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'next/image'; // Import Image from next/image

// images
import logo from 'assets/images/logo.png';

const Footer = () => {
    return (
        <section className="section pt-lg-6 pt-3 pb-3 position-relative" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <ul className="list-inline list-with-separator">
                            <li className="list-inline-item me-0">
                                <Link to="#">About</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Support</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                Version{' '}
                                <Link to="#">
                                    <span className="align-middle badge badge-soft-info rounded-pill px-2 py-1">
                                        v1.0
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <p className="mt-2 fs-14">
                            {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by{' '}
                            <a href="https://coderthemes.com/">Coderthemes</a>
                        </p>

                        <Image
                            src={logo}
                            height={30} // Set the height for the logo
                            width={100} // Set the width for the logo (adjust as necessary)
                            className="mt-2 mb-4"
                            alt="Company Logo" // Provide a meaningful alt text for accessibility
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
