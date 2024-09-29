import React from 'react';

import { Alert, Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const Routing = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">Routing</Card.Title>
                                <p>
                                    Prompt React is having routing setup based on{' '}
                                    <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
                                        React-Router v6
                                    </a>
                                    .
                                </p>
                                <p>
                                    You can easily add, change or remove any route by simply making changes described
                                    below:
                                </p>

                                <div className="p-lg-1">
                                    <ol>
                                        <li>
                                            Open <code>src/routes/index.tsx</code> file, declare your component. E.g.
                                            <p>
                                                <code>
                                                    const Dashboard2 = React.lazy(() =&gt;
                                                    import('./pages/other/account/Dashboard'));
                                                </code>
                                            </p>
                                        </li>
                                        <li>
                                            And make sure to add the entry for same with <code>path</code> and{' '}
                                            <code>element</code>
                                            <p>
                                                <code>
                                                    {'{'}path: 'dashboard', element: &lt;LoadComponent component={'{'}
                                                    Dashboard{'}'} /&gt; {'}'},
                                                </code>
                                            </p>
                                            <p>Each of these properties are explained below:</p>
                                            <ul>
                                                <li>
                                                    <strong>path</strong> - Url relative path
                                                </li>
                                                <li>
                                                    <strong>element</strong> - Lazily load component with actual
                                                    component name which would get rendered when user visits the path
                                                </li>
                                                <ul>
                                                    <li>
                                                        If you want to restrict the non authenticated and unauthorized
                                                        users to access particular path, specify element as{' '}
                                                        <code>PrivateRoute</code>. The children of{' '}
                                                        <code>PrivateRoute</code> will be restricted.
                                                        <p>
                                                            If you specify <code>PrivateRoute</code>, the application
                                                            would check if the user is already authenticated or not and
                                                            also validate if the user is having required role assigned
                                                            to it, in order to access the specified path. In order to
                                                            specify which roles are allowed, you can specify them using{' '}
                                                            <strong>roles</strong> property.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>

                                <div className="mt-1">
                                    <Alert variant="" className="bg-soft-primary">
                                        Note that you don't need to restart the development server in order to see the
                                        menu changes getting in effect
                                    </Alert>
                                </div>

                                <div className="p-lg-3">
                                    <p>Optionally, you might want to add the nav menu entry in menu component.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Routing;
