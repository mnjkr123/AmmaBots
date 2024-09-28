import { Link } from 'react-router-dom';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Project } from './types';

type ProjectsProps = {
    projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <section className="py-lg-5 pb-5 pt-2 position-relative">
            <Container>
                <Tab.Container defaultActiveKey="pills-design-tab">
                    <Row className="justify-content-center">
                        <Col className="text-start">
                            <h1 className="display-5 fw-medium">Latest Projects</h1>
                        </Col>
                        <Col xs="auto">
                            <Nav
                                as="ul"
                                variant="pills"
                                className="pe-0 me-0 align-items-center"
                                id="pills-tab"
                                role="tablist"
                            >
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link
                                        className="cursor-pointer"
                                        id="pills-design-tab"
                                        eventKey="pills-design-tab"
                                    >
                                        UI/UX Design
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link
                                        className="cursor-pointer"
                                        id="pills-branding-tab"
                                        eventKey="pills-branding-tab"
                                    >
                                        Branding
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link
                                        className="cursor-pointer"
                                        id="pills-marketing-tab"
                                        eventKey="pills-marketing-tab"
                                    >
                                        Marketing
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link className="cursor-pointer" id="pills-web-tab" eventKey="pills-web-tab">
                                        Web Development
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={12}>
                            <Tab.Content className="mt-2" id="pills-tabContent">
                                <Tab.Pane eventKey="pills-design-tab">
                                    <Row className="features-6" data-aos="fade-up" data-aos-duration="600">
                                        {(projects || []).map((project, index) => {
                                            return (
                                                <Col lg={6} key={index.toString()}>
                                                    <div className="bg-light ps-5 pt-5 mb-4 mb-sm-5 rounded feature-item">
                                                        <Row className="align-items-center">
                                                            <Col xs="auto">
                                                                <h3 className="text-dark mt-0">{project.title}</h3>
                                                            </Col>
                                                            <Col className="text-end pe-5">{project.description}</Col>
                                                        </Row>
                                                        <Row className="mt-4">
                                                            <Col>
                                                                <img
                                                                    src={project.image}
                                                                    alt="ProjectImg1"
                                                                    className="img-fluid shadow rounded"
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <div className="overlay">
                                                            <Link
                                                                to="#"
                                                                className="btn btn-danger btn-sm btn-view shadow-lg"
                                                            >
                                                                View Project
                                                                <FeatherIcon
                                                                    icon="arrow-right"
                                                                    className="icon-xs ms-2"
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
};

export default Projects;
