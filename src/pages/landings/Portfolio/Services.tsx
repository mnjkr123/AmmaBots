import { Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

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
                    <Col className="text-start">
                        <h1 className="display-5 fw-semibold">What I Do</h1>
                        <p className="text-muted mx-auto">
                            Connecting brands and companies with their customers through{' '}
                            <span className="text-danger fw-medium">good design</span>.
                        </p>
                    </Col>
                </Row>
                <Row className="pt-5 align-items-center features-9">
                    {(services || []).map((service, index) => {
                        return (
                            <Col lg={4} key={index.toString()}>
                                <Card
                                    className="shadow feature-item rounded-0"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                >
                                    <Card.Body className="text-start">
                                        <div className="bg-soft-danger avatar avatar-sm icon icon-with-bg icon-xs text-danger">
                                            <FeatherIcon icon={service.icon} claasName="icon-dual-danger" />
                                        </div>
                                        <h4 className="mt-4 text-dark">{service.title}</h4>
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
