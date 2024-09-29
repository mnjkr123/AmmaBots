import React from 'react';

import { Badge, Col, Container, Row } from 'react-bootstrap';

// components
import FAQContent from 'components/FAQContent';

const FAQs = () => {
    return (
        <section className="section py-6 pt-sm-6 pb-sm-7 position-relative bg-light">
            <Container data-aos="fade-up" data-aos-duration="600">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            FAQs
                        </Badge>
                        <h1 className="display-5 fw-medium">Frequently Asked Questions</h1>
                        <p className="text-muted mx-auto">
                            Here are some of the basic types of questions for our customers
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={10} lg={8}>
                        <FAQContent />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQs;
