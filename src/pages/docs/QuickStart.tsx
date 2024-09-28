import { Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const QuickStart = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <h4 className="mt-0">Quick Start</h4>

                                <p>
                                    Prompt React is created using{' '}
                                    <a
                                        href="https://github.com/facebook/create-react-app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Create React App (CLI)
                                    </a>
                                    .
                                </p>
                                <p>
                                    In case if you don't know - Create React App is a tool built by Facebook to help
                                    developers build react applications with simply just one command. It set up and
                                    configures everything automatically and so you don't need to configure anything
                                    manually (e.g. No need to install and configure tools like webpack or babel). they
                                    are preconfigured by creating react app.
                                </p>
                                <h5 className="mt-4" id="prerequisites">
                                    Prerequisites
                                </h5>
                                <p>Please follow the below steps to install and setup all prerequisites:</p>
                                <ul>
                                    <li>
                                        <strong>Nodejs</strong>
                                        <p>
                                            Make sure to have the{' '}
                                            <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                                                Node.js
                                            </a>
                                            installed &amp; running in your computer. If you already have installed
                                            nodejs on your computer, you can skip this step
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Yarn</strong>
                                        <p>
                                            Make sure to have the{' '}
                                            <a href="https://yarnpkg.com/lang/en/" target="_blank" rel="noreferrer">
                                                Yarn
                                            </a>{' '}
                                            installed &amp; running in your computer. If you already have installed yarn
                                            on your computer, you can skip this step
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Git</strong>
                                        <p>
                                            Make sure to have the{' '}
                                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                                                Git
                                            </a>{' '}
                                            installed &amp; running in your computer. If you already have installed git
                                            on your computer, you can skip this step
                                        </p>
                                    </li>
                                </ul>
                                <h5 className="mt-4" id="installation">
                                    Installation
                                </h5>
                                <p>To setup Prompt React, follow the below-mentioned steps:</p>
                                <ul>
                                    <li>
                                        <strong>Install Prerequisites</strong>
                                        <p>
                                            Make sure to have all the above prerequisites installed &amp; running on
                                            your computer
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Install Dependencies</strong>
                                        <p>
                                            Open your terminal, go to your folder and enter the command{' '}
                                            <code>yarn</code>. This would install all required dependencies in{' '}
                                            <code>node_modules</code> folder. And now, you are ready to run the React
                                            for the first time.
                                        </p>
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    After you finished with above steps, you can run the following commands to run
                                    project locally or build for production use:
                                </p>
                                <table className="table table-bordered m-0">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '20%' }}>Command</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>yarn start</code>
                                            </td>
                                            <td>
                                                Runs the project locally, starts the development server and watches for
                                                any changes in your code, including your components, sass, etc. The
                                                development server is accessible at{' '}
                                                <a href="http://localhost:3000">http://localhost:3000</a>.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>yarn build</code>
                                            </td>
                                            <td>
                                                It will create a build folder inside your folder. It bundles React with
                                                production mode and optimizes the build for the best performance. The
                                                build is minified and the filenames include the hashes. Your app is now
                                                ready to be deployed.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default QuickStart;
