import { Card, Col, Row } from 'react-bootstrap';

// components
import BlogPost1 from '../../../components/blog/BlogPost1';
import BlogPost2 from '../../../components/blog/BlogPost2';
import BlogPost3 from '../../../components/blog/BlogPost3';

// dummy data
import { post } from './data';

const BlogItemsExample = () => {
    return (
        <Card id="blog-items">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Blog Items
                </Card.Title>
                <p className="sub-header">
                    Using bootstrap's <code>.card</code>, you can create a card holding blog post.
                </p>

                <Row>
                    <Col xl={4} lg={6}>
                        <BlogPost1 post={post[0]} />
                    </Col>
                    <Col xl={4} lg={6} className="offset-xl-2">
                        <BlogPost2 post={post[0]} />
                    </Col>
                </Row>

                <p className="sub-header mt-4">An example showing minimal details</p>

                <Row>
                    <Col lg={8} xl={5}>
                        <BlogPost3 post={post[0]} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default BlogItemsExample;
