import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';

// component
import Navbar1 from '../../components/navbars/Navbar1';
import Navbar2 from '../../components/navbars/Navbar2';
import Navbar3 from '../../components/navbars/Navbar3';
import Navbar4 from '../../components/navbars/Navbar4';

import DocsLayout from './layout';

const Navbars = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <h4 className="my-0">Navbar</h4>
                <p>
                    The powerful, responsive navigation header, the navbar. Includes support for branding, navigation,
                    and more, including support for collapse plugin.
                </p>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="border">
                                    <Navbar1 hideSearch />
                                </div>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <div className="border">
                                    <Navbar1 hideSearch navClass="navbar-dark bg-dark" />
                                </div>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <div className="border">
                                    <Navbar2 />
                                </div>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <div className="border">
                                    <Navbar3 />
                                </div>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <div className="border">
                                    <Navbar4 />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Navbars;
