import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Benefit } from './types';

type BenefitsProps = {
    benefits: Benefit[];
};

const Benefits = ({ benefits }: BenefitsProps) => {
    return (
        <section className="py-5 mt-5 career-service position-relative">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Benefits
                        </Badge>
                        <h1 className="display-5 fw-semibold">We take care of our team</h1>
                        <p className="text-muted mx-auto">Few benefits from working together</p>
                    </Col>
                </Row>
                <Row>
                    {(benefits || []).map((benefit, index) => {
                        return (
                            <Col
                                lg={6}
                                key={index.toString()}
                                data-aos="fade-up"
                                data-aos-duration={(index + (3 + index)) * 100}
                            >
                                <div className="d-flex align-items-top pe-sm-5 mt-lg-5 mt-4">
                                    <span className="bg-soft-primary avatar avatar-md rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                        <FeatherIcon icon={benefit.icon} className="icon-dual-primary" />
                                    </span>
                                    <div className="flex-grow-1">
                                        <h5 className="mt-0">{benefit.title}</h5>
                                        <p className="text-muted mb-0">{benefit.description}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Benefits;
