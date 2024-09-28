import { Link } from 'react-router-dom';
import { Button, Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import img1 from 'assets/images/blog/post1.jpg';
import img2 from 'assets/images/blog/post2.jpg';

const AwesomePopover = (
    <Popover id={`awesomePopover`}>
        <Popover.Body>
            <div className="d-flex align-items-center">
                <img src={img1} alt="img1" height="60" className="me-3 rounded-sm" />
                <div className="flex-grow-1">
                    <h6 className="fs-14 fw-semibold mt-0 mb-1">Introducing new blazing fast user interface</h6>
                    <span className="d-block fs-13 text-muted">by Emily Blunt</span>
                </div>
            </div>
        </Popover.Body>
    </Popover>
);

const DesktopPopover = (
    <Popover id={`desktopPopover`}>
        <Popover.Body>
            <div className="d-flex align-items-center">
                <img src={img2} alt="img2" height="60" className="me-3 rounded-sm" />
                <div className="flex-grow-1">
                    <h6 className="fs-14 fw-semibold mt-0 mb-1">Awesome Desktop App</h6>
                    <span className="d-block fs-13 text-muted">Desktop App</span>
                </div>
            </div>
        </Popover.Body>
    </Popover>
);

const Navigation = () => {
    return (
        <section className="position-relative pb-5">
            <Container>
                <Row className="border-top border-bottom py-4 align-items-center">
                    <Col md={4} sm={6} className="text-md-start text-center">
                        <OverlayTrigger placement="top" overlay={AwesomePopover}>
                            <Button variant="white">
                                <FeatherIcon icon="arrow-left" className="icon icon-xs me-2" />
                                Awesome Saas App
                            </Button>
                        </OverlayTrigger>
                    </Col>
                    <Col md={4} className="text-md-center">
                        <Link to="#" className="btn btn-white my-md-0 my-3">
                            View All
                        </Link>
                    </Col>
                    <Col md={4} sm={6} className="text-md-end">
                        <OverlayTrigger placement="top" overlay={DesktopPopover}>
                            <Button variant="white">
                                Desktop App
                                <FeatherIcon icon="arrow-right" className="icon icon-xs ms-2" />
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Navigation;
