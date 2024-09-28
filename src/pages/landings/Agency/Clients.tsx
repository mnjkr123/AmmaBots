import { Badge, Col, Container, Row } from 'react-bootstrap';

// images
import amazon from 'assets/images/brands/amazon.svg';
import google from 'assets/images/brands/google.svg';
import paypal from 'assets/images/brands/paypal.svg';
import spotify from 'assets/images/brands/spotify.svg';
import shopify from 'assets/images/brands/shopify.svg';

const brands = [amazon, google, paypal, spotify, shopify];

const Clients = () => {
    return (
        <section className="section py-4 py-sm-8 bg-soft-orange position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row className="py-4">
                    <Col lg={11}>
                        <Row>
                            <Col lg={12}>
                                <Badge pill bg="" className="badge-soft-orange px-2 py-1 mb-2">
                                    Our Customers
                                </Badge>
                            </Col>
                            <Col lg={6}>
                                <h1 className="display-5 fw-semibold mb-1">
                                    We are working with fortune top 500 companies
                                </h1>
                            </Col>
                            <Col lg={6} className="ps-6">
                                <p className="mt-2 text-secondary">
                                    With our powerful set of elements, you can make beautiful and customized WordPress
                                    websites. Incredible amount of design combinations are possible by Drag & Drop,
                                    allowing you to be creative without having any design experience.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            {(brands || []).map((brand, index) => {
                                return (
                                    <Col key={index.toString()}>
                                        <img src={brand} alt="brand" height="32" className="mb-2 mb-xl-0" />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="divider bottom d-none d-sm-block"></div>
        </section>
    );
};

export default Clients;
