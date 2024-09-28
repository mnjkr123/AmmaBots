import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import chatbot2 from 'assets/images/features/chatbot2.png';
import desktop from 'assets/images/hero/desktop.jpg';

const Feature1 = () => {
    return (
        <section className="position-relative overflow-hidden py-6 features-3">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                            <h1 className="display-5 fw-medium mb-2">Smart Bots For Your Needs</h1>
                            <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                                ChatBots are context driven based on your Industry
                            </h5>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="share" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Understands the Context and your Industry
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="git-merge" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Keep Tracks of Chat History
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="users" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Analyzes and gives meaningful Insights to your conversation
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src={chatbot2}
                            alt="chatbot2"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="700"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Feature1;
