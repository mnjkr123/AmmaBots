import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const Customization = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <h4 className="my-0">Customization</h4>

                                <p className="mt-2">
                                    Prompt allows you to easily customize the styling as well as content of the common
                                    elements including top navbar or heros.
                                </p>

                                <h5 className="mt-4">Customize Styling (SCSS)</h5>

                                <p className="mb-1">
                                    Prompt comes with the power of Sass (scss). Scss lets you use features that don't
                                    exist in CSS yet like variables, nesting, mixins, inheritance and other nifty
                                    goodies that make writing CSS fun again.
                                </p>

                                <p className="mb-1">
                                    You can easily modify the themes by simply changing few variables. You even don't
                                    need to change anything in Prompt's source code. You can easily defined the override
                                    variables in <code>src/assets/scss/skins/default</code>.
                                </p>

                                <p>
                                    You can even create a completely new theme by simply copying the{' '}
                                    <code>src/assets/scss/skins/default</code> folder and then override the values
                                    available in the file <code>_variable.scss</code> or{' '}
                                    <code>_custom-variables.scss</code>.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Customization;
