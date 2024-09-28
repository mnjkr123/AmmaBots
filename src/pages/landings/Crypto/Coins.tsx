import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// types
import { Coin } from './types';

type CoinsProps = {
    coins: Coin[];
};

const Coins = ({ coins }: CoinsProps) => {
    return (
        <section className="pt-8 pb-5 position-relative overflow-hidden" data-aos="fade-up">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Supported coins</h1>
                        <p className="text-muted mx-auto">
                            Fastest way to buy or sell <span className="text-dark fw-medium">popular</span> crypto
                            coins.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {(coins || []).map((coin, index) => {
                        return (
                            <Col lg={3} md={6} key={index.toString()}>
                                <div className="d-flex align-items-center py-lg-2 my-4">
                                    <img src={coin.icon} className="icon me-3" alt="" />
                                    <div className="flex-grow-1">
                                        <h4 className="my-0 fw-medium">{coin.name}</h4>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>

                <Row className="mt-4">
                    <Col lg={12} className="mt-4 mt-lg-2 text-center">
                        <Link to="#" className="btn btn-primary">
                            View complete list <FeatherIcon className="ms-2 icon icon-xs" icon="arrow-right" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Coins;
