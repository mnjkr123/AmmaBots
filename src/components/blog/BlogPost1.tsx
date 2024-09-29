import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Post } from './types';

type BlogPostProps = {
    post: Post;
};

const BlogPost1 = ({ post }: BlogPostProps) => {
    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className="overlay"></div>
                <span className="card-badge top-right bg-danger text-white">{post.tag.value}</span>

                <div className="position-relative">
                    <Card.Img src={post.image} alt="Card Image" variant="top" />
                    <div className="shape text-white bottom">
                        <svg
                            width="528px"
                            height="40px"
                            viewBox="0 0 528 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="shape" transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)">
                                <path
                                    d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z"
                                    transform="translate(7.629395E-06 6.103516E-05)"
                                    fill="currentColor"
                                    stroke="none"
                                />
                            </g>
                        </svg>
                    </div>
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
                                <FeatherIcon icon="user" className="icon icon-dual icon-xs me-1" />
                                <Link to="#" className="fs-14 align-middle">
                                    {post.postedBy?.name}
                                </Link>
                            </p>
                        </Col>
                        <Col className="text-end">
                            <p className="mb-0">
                                <FeatherIcon icon="calendar" className="icon icon-dual icon-xs me-1" />
                                <Link to="#" className="fs-14 align-middle">
                                    {post.postedOn?.date}
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BlogPost1;
