import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// components
import AddComment from './AddComment';

// images
import img1 from 'assets/images/avatars/img-2.jpg';
import img2 from 'assets/images/avatars/img-6.jpg';

const Comments = () => {
    return (
        <section className="position-relative pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div>
                            <h4 className="mb-3">
                                Comments
                                <Badge bg="" className="badge-soft-secondary fs-14 align-middle ms-2">
                                    3
                                </Badge>
                            </h4>
                            <div className="d-flex align-items-top mt-4">
                                <img className="me-2 rounded-sm" src={img1} alt="" height="36" />
                                <div className="flex-grow-1">
                                    <h6 className="m-0">Sansa Stark </h6>
                                    <p className="text-muted mb-0">
                                        <small>2 days ago</small>
                                    </p>

                                    <p className="my-1">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque.
                                    </p>

                                    <div>
                                        <Link to="#" className="btn btn-sm btn-link text-primary fw-medium p-0">
                                            <FeatherIcon className="icon-xxs icon me-1" icon="message-circle" />
                                            Reply
                                        </Link>
                                    </div>

                                    <div className="d-flex align-items-top mt-4">
                                        <img className="me-2 rounded-sm" src={img2} alt="" height="36" />
                                        <div className="flex-grow-1">
                                            <h6 className="m-0">Cersei Lannister </h6>
                                            <p className="text-muted mb-0">
                                                <small>1 day ago</small>
                                            </p>

                                            <p className="my-1">
                                                Itaque earum rerum hic tenetur sapiente delectus aut reiciendis
                                                voluptatibus maiores alias consequatur aut perferendis
                                            </p>
                                            <div>
                                                <Link to="#" className="btn btn-sm btn-link text-primary fw-medium p-0">
                                                    <FeatherIcon className="icon-xxs icon me-1" icon="message-circle" />
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />
                            <div className="d-flex align-items-top mt-4">
                                <img className="me-2 rounded-sm" src={img1} alt="" height="36" />
                                <div className="flex-grow-1">
                                    <h6 className="m-0">Sansa Stark </h6>
                                    <p className="text-muted mb-0">
                                        <small>2 days ago</small>
                                    </p>

                                    <p className="my-1">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque.
                                    </p>

                                    <div>
                                        <Link to="#" className="btn btn-sm btn-link text-primary fw-medium p-0">
                                            <FeatherIcon className="icon-xxs icon me-1" icon="message-circle" />
                                            Reply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* post a comment */}
                        <AddComment />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Comments;
