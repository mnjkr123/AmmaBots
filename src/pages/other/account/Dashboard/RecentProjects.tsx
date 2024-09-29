import React from 'react';

import { Link } from 'react-router-dom';
import { Badge, Card, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { Project } from './types';

type RecentProjectsProps = {
    projects: Project[];
};

const ReecentProjects = ({ projects }: RecentProjectsProps) => {
    return (
        <Row>
            <Col lg={12}>
                <Row>
                    <Col>
                        <h4 className="mb-3 mt-0 fs-16">Recent Projects</h4>
                    </Col>
                    <Col xs="auto" className="text-end">
                        <Link to="#" className="fw-semibold text-primary fs-13">
                            View All
                            <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                        </Link>
                    </Col>
                </Row>
                <Row>
                    {(projects || []).map((project, index) => {
                        return (
                            <Col lg={4} key={index.toString()}>
                                <Card>
                                    <Card.Body>
                                        {/* action */}
                                        <Row className="align-items-center">
                                            <Col>
                                                <p className="text-muted fs-13 fw-medium mb-0">{project.time}</p>
                                            </Col>
                                            <Col xs="auto" className="text-end">
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
                                                            <FeatherIcon icon="eye" className="icon-xxs icon me-2" />{' '}
                                                            View
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <FeatherIcon icon="edit-3" className="icon-xxs icon me-2" />{' '}
                                                            Edit
                                                        </Dropdown.Item>
                                                        <Dropdown.Divider as="div" />
                                                        <Dropdown.Item className="text-danger">
                                                            <FeatherIcon
                                                                icon="trash-2"
                                                                className="icon-xxs icon me-2"
                                                            />{' '}
                                                            Delete
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>

                                        <div className="mt-3">
                                            <h4 className="mt-0 mb-1">
                                                <Link to="#">{project.title}</Link>
                                            </h4>
                                            <Badge
                                                bg=""
                                                className={classNames('mb-1', 'badge-soft-' + project.state.variant)}>
                                                {project.state.name}
                                            </Badge>
                                            <p className="text-muted fs-14 mt-3">{project.description}</p>
                                        </div>

                                        {/* progress */}
                                        <div className="mt-4">
                                            <Row>
                                                <Col>
                                                    <h6 className="mt-0">Progress</h6>
                                                </Col>
                                                <Col className="text-end">
                                                    <small className="fw-semibold">{project.progress.value}%</small>
                                                </Col>
                                            </Row>
                                            <ProgressBar
                                                now={project.progress.value}
                                                variant={project.progress.variant}
                                                style={{ height: '6px' }}
                                            />
                                        </div>

                                        {/* assignment */}
                                        <Row className="mt-3">
                                            <Col>
                                                <div className="avatar-group">
                                                    {(project.member || []).map((member, index) => {
                                                        return (
                                                            <Link
                                                                to="#"
                                                                className="avatar-group-item mb-0"
                                                                key={index.toString()}>
                                                                <img
                                                                    src={member}
                                                                    alt="member"
                                                                    className="img-fluid avatar-xs rounded rounded-circle avatar-border"
                                                                />
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
};

export default ReecentProjects;
