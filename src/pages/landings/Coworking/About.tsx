import { Badge, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const About = () => {
    return (
        <section className="py-lg-6 py-4 mt-xl-10 mt-0 coworking-1">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="text-center">
                            <Badge pill bg="" className="badge-soft-info px-2 py-1">
                                About
                            </Badge>
                            <h1 className="display-5 fw-medium">More Productivity, Less Expenses</h1>
                            <p className="text-muted mx-auto w-75 mt-1">
                                From an established enterprise or a startup, we offer space that fits all.
                            </p>

                            <Row className="mt-5 text-center" data-aos="fade-up">
                                <Col xs={6} md={3} className="mb-5 mb-sm-0">
                                    <div className="display-3 fw-bold">
                                        <CountUp duration={2} end={21} />
                                    </div>
                                    <p className="mt-1 mb-0">Meeting Rooms</p>
                                </Col>

                                <Col xs={6} md={3} className="mb-5 mb-sm-0">
                                    <div className="display-3 fw-bold">
                                        <CountUp duration={2} start={5} end={51} />
                                    </div>
                                    <p className="mt-1 mb-0">Event Spaces</p>
                                </Col>

                                <Col xs={6} md={3} className="mb-5 mb-sm-0">
                                    <div className="display-3 fw-bold">
                                        <CountUp duration={2} start={1} end={11} />
                                    </div>
                                    <p className="mt-1 mb-0">Studio Rooms</p>
                                </Col>

                                <Col xs={6} md={3} className="mb-5 mb-sm-0">
                                    <div className="display-3 fw-bold">
                                        <CountUp duration={2} start={100} end={500} suffix="+" />
                                    </div>
                                    <p className="mt-1 mb-0">Seating Spaces</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
