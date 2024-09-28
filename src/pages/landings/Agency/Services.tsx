import { Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { Service } from './types';

type ServicesProps = {
    services: Service[];
};

const Services = ({ services }: ServicesProps) => {
    return (
        <section className="position-relative py-6">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">What We Do</h1>
                        <p className="text-muted mx-auto">
                            We are helping businesses to develop their web applications
                        </p>
                    </Col>
                </Row>
                <Row className="pt-5 features-5">
                    {(services || []).map((service, index) => {
                        return (
                            <Col md={4} key={index.toString()}>
                                <Card
                                    className="border-0 shadow-none feature-item"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                >
                                    <Card.Body>
                                        <span
                                            className={classNames(
                                                'bg-soft-' + service.variant,
                                                'text-' + service.variant,
                                                'avatar',
                                                'avatar-sm',
                                                'rounded-lg',
                                                'icon',
                                                'icon-with-bg',
                                                'icon-xs',
                                                'me-3'
                                            )}
                                        >
                                            <FeatherIcon
                                                icon={service.icon}
                                                className={classNames('icon-dual-' + service.variant)}
                                            />
                                        </span>

                                        <h4 className="mt-3 mb-2 fw-semibold">{service.title}</h4>
                                        <p className="text-muted mb-0">{service.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
