import { Badge, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Post } from 'components/blog';

type BlogPostProps = {
    post: Post;
};

const BlogPost1 = ({ post }: BlogPostProps) => {
    return (
        <Card className="shadow-none">
            <Row>
                <Col md={5}>
                    <img className="img-fluid rounded-sm" src={post.image} alt="" />
                </Col>
                <Col md={7}>
                    <Card.Body className="d-flex flex-column h-100 p-0 px-2">
                        <Link to="#">
                            <Badge bg="" className={classNames('badge-soft-' + post.tag.variant, 'mb-1')}>
                                {post.tag.value}
                            </Badge>
                        </Link>

                        <h3 className="mt-1 fw-semibold">
                            <Link to="/pages/blog/post">{post.title}</Link>
                        </h3>

                        <p className="text-muted">
                            {post.description}{' '}
                            <Link to="/pages/blog/post" className="text-primary">
                                read more
                            </Link>
                        </p>

                        <div className="mt-auto">
                            <div className="d-flex">
                                <img className="me-2 rounded-sm" src={post.postedBy!.avatar} alt="" height="36" />
                                <div className="flex-grow-1">
                                    <h6 className="m-0 fs-13">
                                        <Link to="#">{post.postedBy!.name}</Link>
                                    </h6>
                                    <p className="text-muted mb-0 fs-13">
                                        {post.postedOn!.date} · {post.postedOn!.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default BlogPost1;
