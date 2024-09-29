import React from 'react';

import { Link } from 'react-router-dom';
import { Badge, Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { Task } from './types';

type TasksProps = {
    tasks: Task[];
};

const Tasks = ({ tasks }: TasksProps) => {
    return (
        <Row>
            <Col lg={12}>
                <Row>
                    <Col>
                        <h4 className="mb-3 mt-0 fs-16">Tasks</h4>
                    </Col>
                    <Col xs="auto">
                        <Link to="#" className="fw-semibold text-primary fs-13">
                            View All
                            <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                        </Link>
                    </Col>
                </Row>

                {(tasks || []).map((task, index) => {
                    return (
                        <Row className="mb-2" key={index.toString()}>
                            <Col>
                                <Card className="mb-0">
                                    <Card.Body>
                                        <Row className="align-items-center justify-content-sm-between">
                                            <Col lg={6}>
                                                <Form>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label={task.title}
                                                        id={`task${task.id}`}
                                                    />
                                                </Form>
                                            </Col>
                                            <Col lg={3}>
                                                <Badge pill bg="" className={classNames('badge-soft-' + task.variant)}>
                                                    {task.time}
                                                </Badge>
                                            </Col>
                                            <Col lg={3}>
                                                <ul className="list-inline text-sm-end mb-0">
                                                    <li className="list-inline-item pe-3">
                                                        <span className="icon icon-xxs text-normal">
                                                            <FeatherIcon icon="list" className="icon-dual-dark me-1" />
                                                        </span>
                                                        {task.taskRatio.completedTask}/{task.taskRatio.totalTask}
                                                    </li>
                                                    <li className="list-inline-item pe-3">
                                                        <span className="icon icon-xxs text-normal">
                                                            <FeatherIcon icon="mail" className="icon-dual-dark me-1" />
                                                        </span>
                                                        {task.comment}
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Badge
                                                            bg=""
                                                            className={classNames(
                                                                { 'badge-soft-danger': task.priority === 'High' },
                                                                { 'badge-soft-info': task.priority === 'Medium' },
                                                                { 'badge-soft-success': task.priority === 'Low' },
                                                                'p-1'
                                                            )}>
                                                            {task.priority}
                                                        </Badge>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    );
                })}

                <Row className="mb-3 mt-4">
                    <Col>
                        <div className="text-center">
                            <Button variant="outline-primary" size="sm">
                                <Spinner animation="border" size="sm" className="me-1" />
                                Load More
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Tasks;
