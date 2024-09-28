import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import Marketing from 'assets/images/features/marketing4.jpg';

const Features4 = () => {
    return (
        <section className="section py-4 py-sm-8 bg-gradient3 position-relative" data-aos="fade-up">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col lg={5}>
                        <h1 className="display-4 fw-semibold mb-4">Monitor what is being performed anytime</h1>
                        <p className="mb-5">
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                            et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a
                            sapiente delectus ut aut reiciendis voluptatibus maiores alias...
                        </p>
                        <Link to="#" className="btn btn-primary">
                            Start Free Trial
                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xs" />
                        </Link>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img src={Marketing} alt="marketing" className="img-fluid d-block mx-auto mt-4 mt-lg-0" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features4;
