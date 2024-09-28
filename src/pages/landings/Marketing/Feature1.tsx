import classNames from 'classnames';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Feature } from './types';

type FeatureProps = {
    features: Feature[];
};

const Features1 = ({ features }: FeatureProps) => {
    return (
        <section className="py-5 position-relative">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Badge pill className="badge-soft-primary px-2 py-1" bg="">
                            Features
                        </Badge>
                        <h1 className="display-5 fw-semibold">Marketing Solutions that works for everyone</h1>
                        <p className="text-muted mx-auto">
                            Start working with <span className="text-primary fw-bold">Prompt</span> to manage your
                            marketing better.
                        </p>
                    </Col>
                </Row>
                <Row className="pt-5">
                    {(features || []).map((feature, index) => {
                        return (
                            <Col md={4} data-aos="fade-up" data-aos-duration="300" key={index.toString()}>
                                {/* <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary"> */}
                                <span
                                    className={classNames(
                                        'bg-soft-' + feature.variant,
                                        'text-' + feature.variant,
                                        'avatar',
                                        'avatar-sm',
                                        'rounded-lg',
                                        'icon',
                                        'icon-with-bg',
                                        'icon-xs'
                                    )}
                                >
                                    <FeatherIcon
                                        icon={feature.icon}
                                        className={classNames('icon-dual-' + feature.variant)}
                                    />
                                </span>
                                <h4 className="mt-3 mb-2 fw-semibold">{feature.title}</h4>
                                <p className="mb-4 pb-3 text-muted">{feature.description}</p>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Features1;
