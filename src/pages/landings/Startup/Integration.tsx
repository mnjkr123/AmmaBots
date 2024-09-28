import { Badge, Card, Col, Container, Row } from 'react-bootstrap';

// types
import { Integration } from './types';

type IntegrationsProps = {
    integrations: Integration[];
};

const Integrations = ({ integrations }: IntegrationsProps) => {
    return (
        <section className="my-5 py-6 bg-gradient2 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Integrations
                        </Badge>
                        <h1 className="display-5 fw-medium">Sync your data anywhere</h1>
                        <p className="text-muted mx-auto">
                            Sync your campaigns or other marketing data{' '}
                            <span className="text-primary fw-bold">anywhere</span>.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {(integrations || []).map((integration, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex text-align-start">
                                            <img
                                                src={integration.appLogo}
                                                alt="app"
                                                height="60"
                                                className="me-4 align-self-center flex-shrink-0"
                                            />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">{integration.app}</h5>
                                                <p className="mb-0">{integration.description}</p>
                                            </div>
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

export default Integrations;
