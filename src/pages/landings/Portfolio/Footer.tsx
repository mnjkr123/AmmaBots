import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="section pt-4 pb-3 position-relative">
            <Container>
                <Row className="align-items-center border-top border-light pt-4">
                    <Col className="text-center">
                        <ul className="list-inline list-with-separator">
                            <li className="list-inline-item me-0">
                                <Link to="#">About</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Services</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Contact</Link>
                            </li>
                        </ul>
                        <p className="mt-2">
                            {new Date().getFullYear()}© Prompt. All rights reserved. Crafted by
                            <a href="https://coderthemes.com/">Coderthemes</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
