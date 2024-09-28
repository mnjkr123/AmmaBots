import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import logo from 'assets/images/logo.png';

const Footer = () => {
    return (
        <section className="section pt-lg-5 pt-3 pb-3 position-relative" data-aos="fade-up" data-aos-duration="1400">
            <Container>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <ul className="list-inline list-with-separator">
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
                                    <span className="align-middle badge badge-soft-info rounded-pill fw-normal fs-11 px-2 py-1 ms-1">
                                        We're hiring
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <p className="mt-2 fs-14">
                            {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by{' '}
                            <a href="https://coderthemes.com/">Coderthemes</a>
                        </p>
                        <img src={logo} height="30" className="mt-2 mb-4" alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
