import React from 'react';

import { Link } from 'react-router-dom';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const RevenueWidget = () => {
    return (
        <Col lg={4}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <h4 className="mb-1 mt-0 fs-16">Revenue</h4>
                        </Col>
                        <Col xs="auto">
                            <Dropdown align="end">
                                <Dropdown.Toggle
                                    as={Link}
                                    to="#"
                                    id="dropdownMenuLink-1"
                                    className="btn-link text-muted p-0">
                                    <FeatherIcon icon="more-horizontal" className="icon icon-xs" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <FeatherIcon icon="edit" className="icon-xxs icon me-2" /> Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <FeatherIcon icon="refresh-cw" className="icon-xxs icon me-2" /> Refresh
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                    <h1>$2,100.00</h1>
                    <p className="text-muted">Last Week</p>

                    <hr className="mb-1" />

                    <Row>
                        <Col lg={6}>
                            <div className="d-flex align-items-center mt-2">
                                <div className="me-3 flex-shrink-0">
                                    <FeatherIcon icon="trending-up" className="text-success" />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mt-0 mb-0">15%</h5>
                                    <p className="text-muted mb-0 fs-13">Prev Week</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="d-flex align-items-center mt-2">
                                <div className="me-3 flex-shrink-0">
                                    <FeatherIcon icon="trending-down" className="text-danger" />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mt-0 mb-0">10%</h5>
                                    <p className="text-muted mb-0 fs-13">Prev Month</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default RevenueWidget;
