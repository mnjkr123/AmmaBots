import React from 'react';

import { Link } from 'react-router-dom';
import { Card, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import profile from 'assets/images/avatars/img-8.jpg';

const ProfileWidget = () => {
    return (
        <Col lg={5}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <div className="d-flex">
                                <img src={profile} alt="profile" className="img-fluid avatar-sm rounded-sm me-3" />
                                <div className="flex-grow-1">
                                    <h4 className="mb-1 mt-0 fs-16">Ms. Greeva Navadiya</h4>
                                    <p className="text-muted pb-0 fs-14">Web & Graphic Designer</p>
                                </div>
                            </div>
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
                                    <Dropdown.Divider as="div" />
                                    <Dropdown.Item className="text-danger">
                                        <FeatherIcon icon="trash-2" className="icon-xxs icon me-2" /> Deactivate
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                    <ul className="list-inline py-3 border-bottom">
                        <li className="list-inline-item mb-sm-0 mb-2 me-sm-2">
                            <Link to="#" className="text-muted fs-14">
                                <FeatherIcon icon="mail" className="icon-xs icon me-1" />
                                greeva@coderthemes.com
                            </Link>
                        </li>
                        <li className="list-inline-item mb-sm-0 mb-2">
                            <Link to="#" className="text-muted fs-14">
                                <FeatherIcon icon="phone" className="icon-xs icon me-2" />
                                +00 123-456-789
                            </Link>
                        </li>
                    </ul>

                    <Row className="align-items-center pt-1">
                        <Col md={6}>
                            <p className="float-end mb-0">85%</p>
                            <h6 className="fw-medium my-0">Project Completion</h6>
                            <ProgressBar now={85} className="mt-3" style={{ height: '6px' }} />
                        </Col>
                        <Col md={6} className="mt-md-0 mt-4">
                            <p className="float-end mb-0">7.5</p>
                            <h6 className="fw-medium my-0">Overall Rating</h6>
                            <ProgressBar now={75} variant="orange" className="mt-3" style={{ height: '6px' }} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProfileWidget;
