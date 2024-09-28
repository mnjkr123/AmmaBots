import { Col, Row } from 'react-bootstrap';

// components
import DocsLayout from '../layout';

import RegularHeading from './RegularHeading';
import DisplayHeading from './DisplayHeading';
import InlineText from './InlineText';

const TypographyExample = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <RegularHeading />
                        <DisplayHeading />
                        <InlineText />
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default TypographyExample;
