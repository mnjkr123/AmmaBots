import { Col, Container, Row } from 'react-bootstrap';

// component
import { SwiperSlider2 } from 'components/sliders';

// dummy data
import { slides } from 'components/sliders/data';

const Testimonial = () => {
    return (
        <section className="section pt-5 pb-7 position-relative features-4">
            <Container>
                <Row>
                    <Col>
                        <h3>Feedback From Client</h3>
                    </Col>
                </Row>
                <Row className="testimonials-2 mt-5">
                    <Col lg={{ span: 10, offset: 1 }}>
                        <div className="slider">
                            <SwiperSlider2 slides={slides} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;
