import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import post1 from 'assets/images/blog/post1.jpg';
import post2 from 'assets/images/blog/post2.jpg';

import img1 from 'assets/images/avatars/img-4.jpg';

const prevPopover = (
    <Popover id="prev-popover">
        <Popover.Body>
            <div className="d-flex align-items-center">
                <img src={post1} width="60" className="me-3 rounded-sm" alt="thumb" />
                <div className="flex-grow-1">
                    <h6 className="fs-14 fw-semibold mt-0 mb-1">Introducing new blazzing fast user interface</h6>
                    <span className="d-block fs-13 text-muted">by Emily Blunt</span>
                </div>
            </div>
        </Popover.Body>
    </Popover>
);

const nextPopover = (
    <Popover id="prev-popover">
        <Popover.Body>
            <div className="d-flex align-items-center">
                <img src={post2} width="60" className="me-3 rounded-sm" alt="thumb" />
                <div className="flex-grow-1">
                    <h6 className="fs-14 fw-semibold mt-0 mb-1">What you should know before...</h6>
                    <span className="d-block fs-13 text-muted">by Emily Blunt</span>
                </div>
            </div>
        </Popover.Body>
    </Popover>
);

const PostNavigation = () => {
    return (
        <section className="position-relative pb-5">
            <Container>
                <Row className="border-top border-bottom py-4 align-items-center">
                    <Col lg={2} xs={6}>
                        <OverlayTrigger placement="top" overlay={prevPopover}>
                            <Link to="#" className="btn btn-white">
                                <i className="icon-xs icon-left-arrow me-2"></i>
                                <span className="d-none d-sm-inline-flex">Prev Post</span>
                            </Link>
                        </OverlayTrigger>
                    </Col>
                    <Col lg={{ offset: 1, span: 6 }}>
                        <div className="d-flex justify-content-lg-center py-lg-0 py-4">
                            <div className="d-flex align-items-center">
                                <img
                                    className="me-3 avatar avatar-sm rounded-circle align-self-center"
                                    src={img1}
                                    alt=""
                                />

                                <div className="flex-grow-1">
                                    <h5 className="m-0">
                                        <Link to="#">Emily Blunt</Link>
                                    </h5>
                                    <p className="text-muted mb-0 fs-14">
                                        I write about the latest trend in web design and development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 2 }} className="text-lg-end text-start col-6">
                        <OverlayTrigger placement="top" overlay={nextPopover}>
                            <Link to="#" className="btn btn-white">
                                <span className="d-none d-sm-inline-flex">Next Post</span>
                                <i className="icon-xs icon-right-arrow ms-2"></i>
                            </Link>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PostNavigation;
