import React from 'react';

import { Alert, Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const CodeSpliting = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">Code Spliting</Card.Title>
                                <p>
                                    Code-splitting is the process of taking one large bundle containing your entire app,
                                    and splitting them up into multiple smaller bundles which contain separate parts of
                                    your app. You can think of code splitting as incrementally downloading the app.
                                </p>
                                <p>
                                    We are using{' '}
                                    <strong>
                                        <code>React.lazy</code>
                                    </strong>{' '}
                                    in order to split the code.
                                </p>

                                <div className="mt-1">
                                    <h4>
                                        <a
                                            href="https://reactjs.org/docs/code-splitting.html#reactlazy"
                                            target="_blank"
                                            rel="noreferrer">
                                            React.lazy
                                        </a>
                                    </h4>

                                    <p>
                                        The React.lazy function lets you render a dynamic import as a regular component.
                                        E.g. Before code splitting:
                                    </p>
                                    <p>
                                        <code>
                                            import DefaultDashboard from './views/dashboards/Default'; <br />
                                            &lt;DefaultDashboard /&gt;
                                        </code>
                                    </p>

                                    <p>
                                        <strong>After code splitting:</strong>
                                    </p>
                                    <p>
                                        <code>
                                            const DefaultDashboard = React.lazy(() =&gt;
                                            import('./views/dashboards/Default')); <br />
                                            &lt;DefaultDashboard /&gt;
                                        </code>
                                    </p>
                                </div>

                                <div className="mt-1">
                                    <Alert variant="" className="bg-soft-primary">
                                        Note that, currently all the views (pages) components are loaded lazily using
                                        React.lazy.
                                    </Alert>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default CodeSpliting;
