import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import google from 'assets/images/buttons/google.png';
import store from 'assets/images/buttons/store.png';

const CTA = () => {
    return (
        <section
            className="section pb-0 py-4 pt-sm-6 position-relative"
            id="section-download"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col>
                        <h1 className="display-5 fw-medium">Start offering your users a better experience</h1>
                        <p className="text-muted mx-auto">
                            Start working with <span className="text-primary fw-bold">Prompt</span> to showcase your app
                            to thousands of people.
                        </p>

                        <div className="text-center mt-5">
                            <Link to="#" className="d-block d-sm-inline-flex">
                                <img src={google} alt="" height="52" />
                            </Link>
                            <Link to="#" className="d-block d-sm-inline-flex mt-2 mt-sm-0 ms-0 ms-sm-2">
                                <img src={store} alt="" height="52" />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
