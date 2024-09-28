import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import code from 'assets/images/other/code.jpg';

const Integration = () => {
    return (
        <section className="position-relative py-xl-8 py-6 features-3" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="mb-5 mb-lg-0">
                            <span className="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3">
                                <FeatherIcon icon="code" className="icon-dual-primary" />
                            </span>
                            <h1 className=" mb-1 my-4">Easy to Integrate - SDK</h1>
                            <p className="text-muted my-4">
                                Maecenas blandit aliquam sem, auctor accumsan mauris finibus pellentesque. In vestibulum
                                ac nunc ut rutrum. Donec mollis viverra magna vel tincidunt.
                            </p>
                            <p className="text-muted mt-3 mb-5">
                                Ut faucibus libero non tortor commodo, ac faucibus lectus fermentum. Sed sit amet ornare
                                turpis, ac lobortis urna.
                            </p>

                            <Link to="#" className="btn btn-primary me-2">
                                Explore the SDK
                            </Link>
                            <Link to="#" className="btn btn-soft-primary">
                                Documentation
                            </Link>
                        </div>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        <img src={code} alt="app img" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Integration;
