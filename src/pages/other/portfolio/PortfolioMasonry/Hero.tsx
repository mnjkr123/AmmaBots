import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-7 py-sm-7 bg-gradient2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">Portfolio Masonry</h1>
                        <p className="fs-17 text-muted">
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
