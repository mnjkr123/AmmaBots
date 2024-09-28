import { Badge, Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import img1 from 'assets/images/avatars/img-4.jpg';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-sm-4">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Blog</Breadcrumb.Item>
                            <Breadcrumb.Item active>Announcing-the-free-upgrade</Breadcrumb.Item>
                        </Breadcrumb>

                        <div className="mt-4">
                            <Link to="#">
                                <Badge bg="" className="badge-soft-orange mb-1">
                                    Announcement
                                </Badge>
                            </Link>
                        </div>
                        <h1 className="hero-title mt-0">Announcing the free upgrade for the subscribed plans</h1>
                    </Col>
                </Row>

                <Row className="mt-4 align-items-center">
                    <Col xs="auto">
                        <div className="d-flex align-items-center">
                            <img className="me-2 avatar avatar-sm rounded-circle avatar-border" src={img1} alt="" />

                            <div>
                                <h5 className="m-0">
                                    <Link to="#">Emily Blunt</Link>
                                </h5>
                                <p className="text-muted mb-0 fs-13">11 Mar, 2020 · 3 min read</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-md-end">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">
                                    Share:
                                </li>
                                <li className="list-inline-item me-2 align-middle">
                                    <Link to="#">
                                        <FeatherIcon className="icon-xs icon-dual-primary" icon="facebook" />
                                    </Link>
                                </li>
                                <li className="list-inline-item me-2 align-middle">
                                    <Link to="#">
                                        <FeatherIcon className="icon-xs icon-dual-info" icon="twitter" />
                                    </Link>
                                </li>
                                <li className="list-inline-item align-middle">
                                    <Link to="#">
                                        <FeatherIcon className="icon-xs icon-dual-danger" icon="instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
