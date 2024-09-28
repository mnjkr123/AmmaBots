import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Project } from '../Portfolio/types';

type PortfolioProps = {
    portfolios: Project[];
};

const Portfolios = ({ portfolios }: PortfolioProps) => {
    return (
        <section className="section py-lg-5 py-4 mb-5 mb-sm-0 position-relative">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            Latest
                        </Badge>
                        <h1 className="display-5 fw-semibold">Featured Work</h1>
                        <p className="text-muted">Explore some of our latest website projects</p>
                    </Col>
                </Row>

                <Row className="features-6" data-aos="fade-up" data-aos-duration="600">
                    {(portfolios || []).map((portfolio, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <div className="bg-gray-50 ps-5 pt-5 mt-4 mt-sm-5 rounded feature-item">
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <h3 className="text-dark my-0">{portfolio.title}</h3>
                                        </Col>
                                        <Col className="text-end pe-5">{portfolio.description}</Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <img
                                                src={portfolio.image}
                                                alt="portfolio"
                                                className="img-fluid shadow rounded"
                                            />
                                        </Col>
                                    </Row>
                                    <div className="overlay">
                                        <Link to="#" className="btn btn-secondary btn-sm btn-view shadow-lg">
                                            View Project
                                            <FeatherIcon icon="arrow-right" className="icon-xs ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>

                <Row className="mt-6 justify-content-center">
                    <Col xs="auto">
                        <Link to="#" className="btn btn-outline-secondary mb-2">
                            Explore All Work
                            <FeatherIcon icon="arrow-right" className="icon-xxs ms-2" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolios;
