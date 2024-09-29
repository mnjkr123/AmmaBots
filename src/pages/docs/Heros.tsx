import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';

// component
import Hero8 from '../../components/heros/Hero8';

import DocsLayout from './layout';

const Heros = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <h4 className="my-0">Heros</h4>
                <p>
                    A hero is a top section typically consisting of a background image, or video, or illustrations, or
                    animations, with text and sometimes a call to action.
                </p>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="bg-gradient2">
                                    <Hero8 />
                                </div>
                                <div className="mt-4">
                                    <p>
                                        There are 12 different options available in Prompt at the moment. You could use
                                        any based on your need. You can explore it at <code>src/components/heros</code>.
                                    </p>
                                    <p>You can easily use by following :</p>
                                    <p className="mb-0">
                                        <code>import {'{ Hero10 }'} from './components/heros';</code> <br />
                                        <code>&lt;Hero10 /&gt;</code>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Heros;
