import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// types
import { SpaceOption } from './types';

type SpaceOptionsProps = {
    spaceOptions: SpaceOption[];
};

const SpaceOptions = ({ spaceOptions }: SpaceOptionsProps) => {
    return (
        <section className="py-5 position-relative">
            <Container>
                <Row data-aos="fade-up">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-orange px-2 py-1">
                            Flexible
                        </Badge>
                        <h1 className="display-5 fw-medium">Coworking Space Options</h1>
                    </Col>
                </Row>

                <Row className="mt-5">
                    {(spaceOptions || []).map((option, index) => {
                        return (
                            <Col lg={6} xl={4} key={index.toString()}>
                                <Card
                                    className="shadow-lg rounded"
                                    data-aos="fade-up"
                                    data-aos-duration={(index + (3 + index)) * 200}
                                >
                                    <img src={option.image} alt="" className="card-img-top" />
                                    <Card.Body>
                                        <div className="">
                                            <h4 className="mt-0">
                                                <Link to="#" className="text-orange">
                                                    {option.title}
                                                </Link>
                                            </h4>
                                            <p className="text-muted mb-2">{option.description}</p>
                                        </div>

                                        <div className="pt-3">
                                            <Row className="align-items-center">
                                                <Col xs="auto">
                                                    <p className="mb-0">
                                                        <FeatherIcon
                                                            icon={option.space.icon}
                                                            className="icon icon-dual icon-xs me-1"
                                                        />
                                                        <Link to="#" className="fs-13 align-middle text-muted">
                                                            {option.space.value}
                                                        </Link>
                                                    </p>
                                                </Col>
                                            </Row>
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

export default SpaceOptions;
