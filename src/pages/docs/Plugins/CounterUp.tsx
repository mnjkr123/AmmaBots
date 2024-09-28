import { Card, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const CounterUp = () => {
    return (
        <Row id="counterUp">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" className="mb-0">
                            Counter Up
                        </Card.Title>
                        <p className="sub-header">
                            CountUp.js is a dependency-free, lightweight JavaScript class that can be used to quickly
                            create animations that display numerical data in a more interesting way.
                        </p>

                        <div className="py-3">
                            <Row className="text-center">
                                <Col xl={3} md={6} className="mb-4 mb-sm-0">
                                    <div className="display-4 fw-light">
                                        <CountUp duration={5} start={10} end={100} suffix="+" />
                                    </div>
                                    <p className="mt-2 mb-0 fw-semibold">Products Built</p>
                                    <p>helped clients across the globe</p>
                                </Col>
                                <Col xl={3} md={6} className="mb-4 mb-sm-0">
                                    <div className="display-4 fw-light">
                                        <CountUp duration={5} start={5} end={21} prefix="$" suffix="M+" />
                                    </div>
                                    <p className="mt-2 mb-0 fw-semibold">Revenue Generated</p>
                                    <p>across 10+ countries</p>
                                </Col>
                                <Col xl={3} md={6} className="mb-4 mb-sm-0">
                                    <div className="display-4 fw-light">
                                        <CountUp duration={5} start={10} end={100} suffix="+" />
                                    </div>
                                    <p className="mt-2 mb-0 fw-semibold">Satisfied Clients</p>
                                    <p>across 100+ locations</p>
                                </Col>
                                <Col xl={3} md={6} className="mb-4 mb-sm-0">
                                    <div className="display-4 fw-light">
                                        <CountUp duration={5} start={10} end={100} suffix="+" />
                                    </div>
                                    <p className="mt-2 mb-0 fw-semibold">Awards Won</p>
                                    <p>on Awwwards, CSS Design Awards</p>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default CounterUp;
