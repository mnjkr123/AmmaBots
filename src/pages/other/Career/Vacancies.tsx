import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { Vacancy } from './types';

type VacancyProps = {
    vacancies: Vacancy[];
};

const Vacancies = ({ vacancies }: VacancyProps) => {
    return (
        <section className="py-5 mt-2 position-relative" id="job-openings">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Job Openings</h1>
                        <p className="text-muted mx-auto">Interested? Come show us what you're made of!</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={12}>
                        {(vacancies || []).map((vacancy, index) => {
                            return (
                                <React.Fragment key={index.toString()}>
                                    <h3 className="mb-2">{vacancy.category}</h3>
                                    <ul className="list-unstyled mb-5 pb-4">
                                        {(vacancy.jobs || []).map((job, index) => {
                                            return (
                                                <li key={index.toString()} className="py-4 border-bottom">
                                                    <div className="float-end ms-4">
                                                        <Link to="#" className="text-muted">
                                                            {job.type}
                                                        </Link>
                                                    </div>
                                                    <Link to="#" className="h5 fw-medium my-0">
                                                        {job.designation}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </React.Fragment>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Vacancies;
