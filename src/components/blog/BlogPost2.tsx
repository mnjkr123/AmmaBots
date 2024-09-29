import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

import { Post } from './types';

type BlogPostProps = {
    post: Post;
};

const BlogPost2 = ({ post }: BlogPostProps) => {
    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className="overlay"></div>
                <span className="card-badge top-right bg-primary text-white">Travel</span>

                <Card.Img src={post.image} alt="Card Image" variant="top" />

                <div className="card-overlay-bottom">
                    <Link to="#" className="shadow-lg">
                        <img
                            src={post.postedBy?.avatar}
                            alt="avatar"
                            className="img-fluid avatar-xs rounded-circle avatar-border me-1"
                        />
                        <h6 className="d-inline text-white">{post.postedBy?.name}</h6>
                    </Link>
                </div>
            </div>
            <Card.Body>
                <div>
                    <h4>
                        <Link to="#" className="card-title-link">
                            {post.title}
                        </Link>
                    </h4>
                    <p className="text-muted mb-2">
                        {post.description}... <Link to="#">read more</Link>
                    </p>
                </div>
                <div className="pt-3">
                    <Row className="align-items-center">
                        <Col>
                            <p className="mb-0">
                                <FeatherIcon icon="calendar" className="icon icon-dual icon-xs me-1" />
                                <Link to="#" className="fs-14 align-middle">
                                    {post.postedOn?.date}
                                </Link>
                            </p>
                        </Col>
                        <Col className="text-end">
                            <p className="mb-0">
                                <FeatherIcon icon="tag" className="icon icon-dual icon-xs me-1" />
                                <Link to="#" className="fs-14 align-middle">
                                    #{post.tag.value}
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BlogPost2;
