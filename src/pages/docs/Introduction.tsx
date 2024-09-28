import { Row, Col, Card } from 'react-bootstrap';

// components
import DocsLayout from './layout';

const createMarkup = (text: string) => {
    return { __html: text };
};

const Introduction = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">Introduction</Card.Title>
                                <p>
                                    Prompt React is a React with Typescript based admin template created using{' '}
                                    <span className="text-danger fw-medium">Create React App</span> &{' '}
                                    <span className="text-danger fw-medium">Bootstrap v5.1.3</span>. Prompt React is
                                    crafted by following the best industry standards in order to provide speed and
                                    scalability. The clean code structure allows you to build any React-based web
                                    application without any hustle. The components can be used very easily on any page.
                                    It's for building responsive, mobile-first landing pages, websites with Bootstrap.
                                </p>

                                <p className="mb-1">Additional features :</p>
                                <ul>
                                    <li>
                                        <code>Lazy Loading(React.lazy)</code>
                                    </li>
                                    <li>
                                        <code>Localization(i18n)</code>
                                    </li>
                                    <li>
                                        <code>Custom Hooks</code>
                                    </li>
                                </ul>

                                <p>
                                    This documentation guide is for all users who can even be beginners or experienced
                                    react developers.
                                </p>
                                <p className="mb-0">
                                    We really care for our buyers and so in case if you are having any question or
                                    feedback, please feel free to get back to us via email{' '}
                                    <span className="text-danger">support@coderthemes.com</span> or by filling out the
                                    contact form on our{' '}
                                    <a href="http://coderthemes.com/#contact" target="_blank" rel="noreferrer">
                                        website
                                    </a>
                                    .
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">File Structure</Card.Title>
                                <p>
                                    Extract the zip file you received after purchase and you would find the "react"
                                    folder in it with exact below files and folders:
                                </p>

                                <div
                                    dangerouslySetInnerHTML={createMarkup(
                                        `<pre class="mb-0">
├── prompt
│   ├── package.json                => Package json file
│   ├── README.md                   => Create react app read me file
│   ├── tsconfig.json               => Specifies the compiler options required to compile the project.
│   ├── <strong>public</strong>   
│   │   └── index.html       
│   │   └── favicon.ico      
│   │   └── manifest.json       
│   ├── <strong>src/</strong>   
│   │   └── <strong>assets</strong>     
│   │       └── images              => images
│   │       └── scss                => scss style files
│   │   └── components              => Reusable components       
│   │   └── helpers                 => Helper Utilities - including fake-backend, api utils, etc       
│   │   └── hooks                   => Hooks - Custom hooks       
│   │   └── locale                  => i18N - internationalization related file  
│   │   └── pages                   => All the pages available in the landings  
│   │   └── routes                  => Application router implementation  
│   │   └── App.tsx                 => Main application component
│   │   └── i18n.ts                 => internationalization
</pre>`
                                    )}
                                ></div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Introduction;
