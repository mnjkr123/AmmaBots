import { Col, Row } from 'react-bootstrap';

// components
import DocsLayout from '../layout';

import Colors from './Colors';
import Backgrounds from './Backgrounds';
import TextColors from './TextColors';

// types
import { Variant } from '../types';

const variants: Variant[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

const ColorsExample = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Colors variants={variants} />
                        <Backgrounds variants={variants} />
                        <TextColors variants={variants} />
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default ColorsExample;
