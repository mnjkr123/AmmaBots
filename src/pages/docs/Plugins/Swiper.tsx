import { Card, Col, Row } from 'react-bootstrap';

// component
import SwiperSlider1 from '../../../components/sliders/SwiperSlider1';

// dummy data
import { slides1 } from '../../../components/sliders/data';

const Swiper = () => {
    return (
        <Row id="swiper">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" className="mb-0">
                            Swiper
                        </Card.Title>
                        <p className="sub-header">
                            Using <a href="https://swiperjs.com/">Swipper</a> plugin, you can easily create carousels.
                            It's being used in almost all the pages where we are having slider in hero element.
                        </p>

                        <h6 className="mt-4 mb-1">Simple Example</h6>
                        <p className="sub-header mb-4">
                            <code>swiper/react</code> export two component: <code>Swiper</code> and{' '}
                            <code>SwiperSlide</code>
                        </p>

                        <Row>
                            <Col lg={12}>
                                <div className="slider">
                                    <SwiperSlider1 slides={slides1} />
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Swiper;
