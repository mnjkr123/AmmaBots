import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-lg-8">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center position-relative">
                        <h1 className="hero-title text-white">Blog</h1>
                        <p className="mt-4 fs-17 text-white">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur
                            ratione voluptatem sequi nesciunt.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
