import { Col, Container, Row, Badge, Card } from 'react-bootstrap';

// types
import { Feature2 } from './types';

type Features2Props = {
    features2: Feature2[];
};

const Features2 = ({ features2 }: Features2Props) => {
    return (
        <section className="section py-5 features-2 position-relative overflow-hidden">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            More Features
                        </Badge>
                        <h1 className="display-5 fw-semibold">Features that showcase your app</h1>
                        <p className="text-muted mx-auto">
                            Start working with <span className="text-primary fw-bold">Prompt</span> to showcase your app
                            to thousands of people.
                        </p>
                    </Col>
                </Row>
                <Row className="my-5">
                    {(features2 || []).map((feature, index) => {
                        return (
                            <Col lg={4} key={index.toString()}>
                                <Card
                                    className="bg-gray-50 shadow-none shapes"
                                    data-aos="fade-up"
                                    data-aos-duration={(index + (1 + index)) * 100}
                                >
                                    {(feature.shapes || []).map((shape, index) => {
                                        return <div key={index.toString()} className={shape}></div>;
                                    })}
                                    <Card.Body className="text-center py-0">
                                        <h3 className="fw-semibold mt-0">{feature.title}</h3>
                                        <p className="fs-14">{feature.description}</p>

                                        <div className="px-2 mt-3">
                                            <img src={feature.image} alt="" className="img-fluid mt-2" />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Features2;
