import { Card, Col, Row } from 'react-bootstrap';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

// images
import coworking from '../../../assets/images/hero/coworking2.jpg';

const Jarallax = () => {
    return (
        <Row id="jarallax">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" className="mb-0">
                            Just Another Parallax
                        </Card.Title>
                        <p className="sub-header">
                            ParallaxLayers contain your content and will be moved according to their offsets and speeds.
                        </p>

                        <div className="py-3">
                            <Row className="text-center">
                                <Col lg={12}>
                                    <div>
                                        <ParallaxProvider>
                                            <ParallaxBanner
                                                layers={[
                                                    {
                                                        image: coworking,
                                                        speed: -55,
                                                        style: { backgroundSize: 'contain' },
                                                    },
                                                ]}
                                                style={{ height: '560px' }}
                                            ></ParallaxBanner>
                                        </ParallaxProvider>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Jarallax;
