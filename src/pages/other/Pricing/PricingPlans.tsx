import React from 'react';

import { Badge, Col, Container, Row } from 'react-bootstrap';

// components
import { PricingCards1, PlanItem } from 'components/pricing';

type PricingPlansProps = {
    plans: PlanItem[];
};

const PricingPlans = ({ plans }: PricingPlansProps) => {
    return (
        <section className="section py-6 position-relative">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Plans
                        </Badge>
                        <h1 className="display-5 fw-semibold">Pricing Plans</h1>
                        <p className="text-muted mx-auto">
                            Pricing that <span className="text-primary fw-bold">works</span> for everyone.
                        </p>
                    </Col>
                </Row>
                <PricingCards1 plans={plans} containerClass="align-items-center mt-0 mt-sm-5" />
            </Container>
        </section>
    );
};

export default PricingPlans;
