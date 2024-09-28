import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import logo from 'assets/images/logo.png';

const Footer = () => {
    return (
        <section className="py-5 py-sm-6 bg-gradient5">
            <Container>
                <Row>
                    <Col lg={4}>
                        <Link className="navbar-brand me-lg-4 me-auto pt-0" to="#">
                            <img src={logo} height="30" className="d-inline-block align-top" alt="" />
                        </Link>
                        <div className="">
                            <p className="mt-3 mb-1 text-dark">
                                At vero eos et accusamus et iusto dignissimos ducimus odio.
                            </p>
                            <p className="mt-lg-5 pt-4 mb-lg-0 mb-4 text-dark">Prompt 2020. All rights reserved.</p>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 7 }}>
                        <Row>
                            <Col md={3} sm={6}>
                                <h6 className="mb-4 mt-4 mt-sm-2 text-dark fw-semibold text-uppercase">Navigations</h6>
                                <ul className="list-unstyled">
                                    <li className="my-3">
                                        <Link to="#" className="text-dark">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className="text-dark">
                                            Locations
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className="text-dark">
                                            Plans
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className="text-dark">
                                            Events
                                        </Link>
                                    </li>
                                </ul>
                            </Col>

                            <Col md={3} sm={6}>
                                <h6 className="mb-4 mt-4 mt-sm-2 text-dark fw-semibold text-uppercase">Contact</h6>
                                <ul className="list-unstyled">
                                    <li className="my-3">
                                        <Link to="#" className="text-dark">
                                            Support
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className="text-dark">
                                            Developers
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className="text-dark">
                                            Customer Service
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className="text-dark">
                                            Get Started Guide
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={{ offset: 1, span: 5 }}>
                                <h6 className="mb-4 mt-4 mt-sm-2 text-dark fw-semibold text-uppercase">
                                    Subscribe To Newsletters
                                </h6>
                                <div className="input-group my-3">
                                    <input
                                        type="text"
                                        className="form-control h-auto"
                                        placeholder="Your email"
                                        aria-label="keywords"
                                    />
                                    <Link to="#" className="btn btn-secondary input-group-text">
                                        <FeatherIcon className="icon-xs" icon="mail" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
