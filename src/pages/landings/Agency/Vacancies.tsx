import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { JobDetail } from './types';

type VacancyProps = {
    jobDetails: JobDetail[];
};

const Vacancies = ({ jobDetails }: VacancyProps) => {
    return (
        <section className="section py-5 position-relative">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="text-center">
                            <h1 className="display-5 fw-semibold">We're Hiring</h1>
                            <p className="mt-0 mb-4">
                                We're a team of lifelong learners. We're equal parts left and right brained.
                            </p>
                            <Link to="#" className="btn btn-secondary mb-2">
                                Learn about our culture
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center my-5">
                    <Col lg={8}>
                        {(jobDetails || []).map((jobDetail, index) => {
                            return (
                                <Link to="#" className="text-dark d-block" key={index.toString()}>
                                    <Card className="border rounded mb-3" data-aos="fade-up" data-aos-duration="700">
                                        <Card.Body className="p-3">
                                            <Row className="align-items-center">
                                                <Col md={6}>
                                                    <h5 className="my-0 fw-semibold">{jobDetail.designation}r</h5>
                                                </Col>
                                                <Col md={{ span: 4, offset: 1 }}>
                                                    <p className="text-muted mb-0">
                                                        {jobDetail.location} / {jobDetail.jobType}
                                                    </p>
                                                </Col>
                                                <Col md={1} className="text-md-end mt-3 mt-md-0">
                                                    <FeatherIcon icon="chevron-right" className="icon-xs" />
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Vacancies;
