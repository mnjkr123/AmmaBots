import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import crypto1 from 'assets/images/blog/crypto1.jpg';
import crypto2 from 'assets/images/blog/crypto2.jpg';
import crypto3 from 'assets/images/blog/crypto3.jpg';

const Blog = () => {
    return (
        <section className="position-relative py-xl-8 py-6 features-3">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1 className="display-5 fw-medium">Useful Reading</h1>
                        <p className="text-muted mx-auto">Few articles to read to know more about cryptocurrency</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={4}>
                        <div className="mb-4" data-aos="fade-up" data-aos-duration="300">
                            <div className="crypto-blog-box position-relative">
                                <span className="ribbon bg-orange fw-medium">Announcement</span>
                                <img src={crypto1} alt="crypto" className="img-fluid d-block shadow rounded" />
                            </div>
                            <p className="text-muted mt-3 mb-0 fs-14">
                                May 19 2020 <b>·</b> 5 min read
                            </p>
                            <h4 className="mt-1">
                                <Link to="#" className="text-dark">
                                    Introducing blazzing fast new user interface
                                </Link>
                            </h4>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-4" data-aos="fade-up" data-aos-duration="600">
                            <div className="crypto-blog-box position-relative">
                                <span className="ribbon bg-danger fw-medium">Bitcoin</span>
                                <img src={crypto3} alt="app img" className="img-fluid d-block shadow rounded" />
                            </div>
                            <p className="text-muted mt-3 mb-0 fs-14">
                                May 18 2020 <b>·</b> 8 min read
                            </p>
                            <h4 className="mt-1">
                                <Link to="#" className="text-dark">
                                    What you should know before buying bitcoin
                                </Link>
                            </h4>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-4" data-aos="fade-up" data-aos-duration="900">
                            <div className="crypto-blog-box position-relative">
                                <span className="ribbon bg-primary fw-medium">Event</span>
                                <img src={crypto2} alt="app img" className="img-fluid d-block shadow rounded" />
                            </div>
                            <p className="text-muted mt-3 mb-0 fs-14">
                                May 13 2020 <b>·</b> 2 min read
                            </p>
                            <h4 className="mt-1">
                                <Link to="#" className="text-dark">
                                    A biggest crypto event to attend this month
                                </Link>
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blog;
