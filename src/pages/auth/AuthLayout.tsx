import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

// components
import SwiperSlider1 from '../../components/sliders/SwiperSlider1';

// dummy data
import { slides1 } from '../../components/sliders/data';

// images
import logo from '../../assets/images/logo.png';

type AuthLayoutProps = {
    hasSlider: boolean;
    children: React.ReactNode;
    bottomLinks?: React.ReactNode;
};

const AuthLayout = ({ hasSlider, children, bottomLinks }: AuthLayoutProps) => {
    return (
        <div className="bg-gradient2 min-vh-100 align-items-center d-flex justify-content-center pt-2 pt-sm-5 pb-4 pb-sm-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={hasSlider ? 12 : 6} md={!hasSlider && 10} lg={!hasSlider && 8}>
                        <Card>
                            <Card.Body className="p-0">
                                <Row className="g-0">
                                    <Col
                                        xs={!hasSlider && 12}
                                        md={hasSlider && 5}
                                        className={hasSlider ? 'shadow' : ''}
                                    >
                                        <div className="p-xl-5 p-3">
                                            <div className="mx-auto mb-5">
                                                <Link to="/" className="d-flex">
                                                    <img
                                                        src={logo}
                                                        alt="logo"
                                                        height="30"
                                                        className="align-self-center"
                                                    />
                                                </Link>
                                            </div>
                                            {children}
                                        </div>
                                    </Col>
                                    {hasSlider && (
                                        <Col md={{ offset: 1, span: 5 }} className="d-none d-md-inline-block">
                                            <div className="position-relative mt-5 pt-5">
                                                <SwiperSlider1 slides={slides1} />
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                            </Card.Body>
                        </Card>

                        <Row className="mt-3">
                            <Col xs={12} className="text-center">
                                {bottomLinks}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

AuthLayout.defaultProps = {
    hasSlider: false,
};

export default AuthLayout;
