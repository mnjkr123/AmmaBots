import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="section py-6 position-relative">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Card className="shadow-none border mb-lg-0 rounded-sm">
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold">Get in touch</h3>
                                <p>
                                    Don't find suitable opening? We'd still love to learn more about you. Contact us and
                                    we'll reach out to have interesting conversation!
                                </p>
                                <Link to="/pages/contact" className="btn btn-outline-primary mt-4">
                                    Contact Us
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="shadow-none border mb-0 rounded-sm">
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold">Meet the team</h3>
                                <p>
                                    Learn more about us and who all work at Prompt. You will get chance to work with
                                    everyone in the team.
                                </p>
                                <Link to="/pages/contact" className="btn btn-outline-primary mt-4">
                                    Meet our team
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
