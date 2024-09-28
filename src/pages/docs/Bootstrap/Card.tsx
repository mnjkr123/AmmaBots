import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';

// images
import CardImg1 from '../../../assets/images/photos/1.jpg';

const Cards = () => {
    return (
        <Card id="cards">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Cards
                </Card.Title>
                <p className="sub-header">
                    Bootstrap's cards provide a flexible and extensible content container with multiple variants and
                    options. Check out{' '}
                    <Link
                        rel="noreferrer"
                        to={{ pathname: 'https://react-bootstrap.netlify.app/components/cards/' }}
                        target="_blank"
                    >
                        Bootstrap's Doc
                    </Link>
                    for more examples.
                </p>

                <Row>
                    <Col xl={5} xxl={4}>
                        <Card className="border mb-xl-0">
                            <Card.Img variant="top" src={CardImg1} alt="Card Img" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={7} xxl={8}>
                        <Card className="border">
                            <Row className="g-0 align-items-center">
                                <Col md={5}>
                                    <Card.Img src={CardImg1} alt="Card Img" />
                                </Col>
                                <Col md={7}>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="border mb-0">
                            <Row className="g-0 align-items-center">
                                <Col md={7}>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Col>
                                <Col md={5}>
                                    <Card.Img src={CardImg1} alt="Card Img" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Cards;
