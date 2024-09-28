import { Card, Col, Row } from 'react-bootstrap';

const DisplayHeading = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as="h4">Display Headings</Card.Title>
                <Card.Text>
                    Traditional heading elements are designed to work best in the meat of your page content. When you
                    need a heading to stand out, consider using a display heading—a larger, slightly more opinionated
                    heading style.
                </Card.Text>
                <Row>
                    <Col>
                        <h1 className="display-1">Display 1</h1>
                        <h1 className="display-2">Display 2</h1>
                        <h1 className="display-3">Display 3</h1>
                        <h1 className="display-4">Display 4</h1>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default DisplayHeading;
