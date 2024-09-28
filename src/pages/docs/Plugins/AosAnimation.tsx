import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const AosAnimation = () => {
    return (
        <Row id="aosAnimation">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" className="mb-0">
                            AoS
                        </Card.Title>
                        <p className="sub-header">Animate on scroll library.</p>

                        <div className="py-3">
                            <Row>
                                {(['up', 'left'] || []).map((direction, index) => {
                                    return (
                                        <Col xxl={3} xl={4} md={6} key={index.toString()}>
                                            <div
                                                className="border rounded p-3 mb-2 mb-xl-0"
                                                data-aos={'fade-' + direction}
                                                data-aos-duration={(index + 1) * 1000}
                                            >
                                                <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                                    <FeatherIcon icon="mail" className="icon-dual-primary" />
                                                </span>
                                                <h4 className="mt-3 mb-2 fw-semibold">First feature</h4>
                                                <p className="text-muted">
                                                    A itaque earum rerum a tenetur the sapiente delectus aut reiciendis
                                                    alias omnis natus.
                                                </p>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default AosAnimation;
