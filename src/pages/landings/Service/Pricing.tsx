import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { PricingCards1, PlanItem } from 'components/pricing';

type PricingProps = {
    plans: PlanItem[];
};

const Pricing = ({ plans }: PricingProps) => {
    return (
        <section className="section pb-4 pb-sm-6 pt-6 position-relative">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="display-5 fw-medium">Pricing</h1>
                        <p className="text-muted mx-auto">
                            Pricing that <span className="text-primary fw-bold">works</span> for everyone.
                        </p>

                        <PricingCards1 plans={plans} containerClass="align-items-center mt-0 mt-sm-5" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;
