import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';

const Footer3 = () => {
    return (
        <section className="section py-4 position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <ul className="list-inline list-with-separator mb-0">
                            <li className="list-inline-item me-0">
                                <Link to="#">About</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Privacy</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Terms</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Developers</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Support</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">
                                    Careers
                                    <Badge
                                        pill
                                        bg=""
                                        className="align-middle badge-soft-info fw-normal fs-11 px-2 py-1 ms-1">
                                        We&apos;re hiring {/* Escape the apostrophe here */}
                                    </Badge>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg="auto" className="text-lg-end mt-2 mt-lg-0">
                        <p className="fs-14 mb-0">
                            {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by{' '}
                            <a href="https://coderthemes.com/">Coderthemes</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer3;
