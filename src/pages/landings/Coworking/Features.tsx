import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Feature } from './types';

type FeaturesProps = {
    features: Feature[];
};

const Features = ({ features }: FeaturesProps) => {
    return (
        <section className="my-lg-5 py-5 py-sm-7 bg-gradient5 position-relative" data-aos="fade-up">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-orange px-2 py-1">
                            Features
                        </Badge>
                        <h1 className="display-5 fw-semibold">Why Choose Us</h1>
                        <p className="text-secondary mx-auto">The benefits that will make you comfort</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    {(features || []).map((feature, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <Card className="shadow">
                                    <Card.Body>
                                        <div className="d-flex text-align-start">
                                            <span className="bg-soft-orange avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-orange me-4 flex-shrink-0">
                                                <FeatherIcon icon={feature.icon} className="icon-dual-orange" />
                                            </span>

                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">{feature.title}</h5>
                                                <p className="mb-0">{feature.description}</p>
                                            </div>
                                        </div>
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

export default Features;
