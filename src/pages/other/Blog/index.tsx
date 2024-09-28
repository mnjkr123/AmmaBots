import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import { Navbar1 } from 'components/navbars';
import { BlogPost3 } from 'components/blog';
import { Footer2 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';
import SubscriptionForm from './SubscriptionForm';

// dummy data
import { post1, post2, post3 } from './data';

// images
import hero from 'assets/images/blog/hero.jpg';

const Blog = () => {
    return (
        <>
            <div className="header-7" style={{ background: `url(${hero}) no-repeat` }}>
                <div className="overlay"></div>

                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-dark zindex-10"
                    buttonClass="btn-white text-white btn-sm"
                />

                <Hero />
            </div>

            <section className="pt-6 pb-4 position-relative">
                <Container>
                    <Row className="justify-content-lg-between">
                        <Col lg={12}>
                            <div className="d-flex align-items-center mb-5">
                                <h5 className="me-2 fw-medium">Tags:</h5>
                                <div>
                                    <Link className="btn btn-sm btn-white mb-1 me-1" to="#">
                                        Business
                                    </Link>
                                    <Link className="btn btn-sm btn-white mb-1 me-1" to="#">
                                        Community
                                    </Link>
                                    <Link className="btn btn-sm btn-white mb-1 me-1" to="#">
                                        Announcement
                                    </Link>
                                    <Link className="btn btn-sm btn-white mb-1 me-1" to="#">
                                        Tutorials
                                    </Link>
                                    <Link className="btn btn-sm btn-white mb-1 me-1" to="#">
                                        Resources
                                    </Link>
                                    <Link className="btn btn-sm btn-white mb-1" to="#">
                                        Interview
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <Row data-aos="fade-up" data-aos-duration="300">
                                <Col lg={8}>
                                    <BlogPost1 post={post1[0]} />
                                </Col>

                                <Col lg={4}>
                                    <SubscriptionForm />
                                </Col>
                            </Row>

                            <Row className="mt-6" data-aos="fade-up">
                                {post2.map((item, index) => {
                                    return (
                                        <Col lg={4} key={index.toString()}>
                                            <BlogPost2 post={item} />
                                        </Col>
                                    );
                                })}
                            </Row>

                            <Row className="mt-6" data-aos="fade-up">
                                <Col lg={8} className="h-100">
                                    <BlogPost1 post={post1[1]} />
                                </Col>

                                <Col lg={4}>
                                    <BlogPost3 post={post3[0]} />
                                </Col>
                            </Row>

                            <Row className="mt-6" data-aos="fade-up">
                                {post2.map((item, index) => {
                                    return (
                                        <Col lg={4} key={index.toString()}>
                                            <BlogPost2 post={item} />
                                        </Col>
                                    );
                                })}
                            </Row>

                            <Row className="mt-5">
                                <Col lg={12}>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link className="btn btn-sm btn-white" to="#">
                                            <i className="icon icon-xxs icon-left-arrow me-2"></i>
                                            Previous
                                        </Link>
                                        <Link className="btn btn-sm btn-white ms-2" to="#">
                                            Next<i className="icon-xxs icon-right-arrow ms-2"></i>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* footer */}
            <Footer2 />

            <BackToTop />
        </>
    );
};

export default Blog;
