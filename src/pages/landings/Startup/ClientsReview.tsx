import { Col, Container, Row } from 'react-bootstrap';

// images
import amazon from 'assets/images/brands/amazon.svg';
import google from 'assets/images/brands/google.svg';
import paypal from 'assets/images/brands/paypal.svg';
import spotify from 'assets/images/brands/spotify.svg';
import shopify from 'assets/images/brands/shopify.svg';

const brands = [amazon, google, paypal, spotify, shopify];

const ClientsReview = () => {
    return (
        <section className="py-5">
            <Container data-aos="fade-up" data-aos-duration="1000">
                <Row>
                    <Col lg={12} className="text-center">
                        <h4 className="fw-medium pb-3 mt-0">Join 10,000+ companies who trust Prompt.</h4>
                        <ul className="list-inline my-3">
                            {(brands || []).map((image, index) => {
                                return (
                                    <li className="list-inline-item me-4 me-lg-5" key={index.toString()}>
                                        <img src={image} alt="brand" className="mb-2 mb-xl-0" height="36" />
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ClientsReview;
