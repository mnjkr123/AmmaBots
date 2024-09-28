import { Badge, Col, Container, Row, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { PlanFeature } from './types';

type PricingProps = {
    planFeatures: PlanFeature[];
};

const Pricing = ({ planFeatures }: PricingProps) => {
    return (
        <section className="my-5 py-5 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Pricing
                        </Badge>
                        <h1 className="display-5 fw-medium">Pricing Plans</h1>
                        <p className="text-muted mx-auto">
                            Pricing that <span className="text-primary fw-bold">works</span> for everyone.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 align-items-center justify-content-center">
                    <Col lg={12}>
                        <div className="table-responsive-lg w-lg-75 mx-lg-auto">
                            <Table>
                                <thead className="text-center">
                                    <tr className="border-top">
                                        <th className="w-50"></th>
                                        <th>
                                            <span className="text-dark">Starter</span>
                                            <small className="d-block text-body fw-normal">$40/mo</small>
                                        </th>
                                        <th className="border-start border-end">
                                            <span className="text-dark">Professional</span>
                                            <Badge bg="orange" pill className="ms-1">
                                                Popular
                                            </Badge>
                                            <small className="d-block text-body fw-normal">$60/mo</small>
                                        </th>
                                        <th>
                                            <span className="text-dark">Enterprise</span>
                                            <small className="d-block text-body fw-normal">$300/mo</small>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(planFeatures || []).map((planFeature, index) => {
                                        return (
                                            <tr className="border-top" key={index.toString()}>
                                                <td>{planFeature.name}</td>
                                                <td className="text-center">
                                                    {planFeature.starter.available ? (
                                                        <span className="icon icon-xs text-success">
                                                            <FeatherIcon icon="check" />
                                                        </span>
                                                    ) : !planFeature.starter.available && planFeature.starter.addon ? (
                                                        <Badge bg="info" pill>
                                                            Add-on Available
                                                        </Badge>
                                                    ) : null}
                                                </td>
                                                <td className="text-center border-start border-end">
                                                    {planFeature.professional.available ? (
                                                        <span className="icon icon-xs text-success">
                                                            <FeatherIcon icon="check" />
                                                        </span>
                                                    ) : !planFeature.professional.available &&
                                                      planFeature.professional.addon ? (
                                                        <Badge bg="info" pill>
                                                            Add-on Available
                                                        </Badge>
                                                    ) : null}
                                                </td>
                                                <td className="text-center">
                                                    {planFeature.enterprise.available ? (
                                                        <span className="icon icon-xs text-success">
                                                            <FeatherIcon icon="check" />
                                                        </span>
                                                    ) : !planFeature.enterprise.available &&
                                                      planFeature.enterprise.addon ? (
                                                        <Badge bg="info" pill>
                                                            Add-on Available
                                                        </Badge>
                                                    ) : null}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;
