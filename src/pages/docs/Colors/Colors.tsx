import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Variant } from '../types';

type ColorsProps = {
    variants: Variant[];
};

const Colors = ({ variants }: ColorsProps) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as="h4" className="my-0">
                    Colors
                </Card.Title>
                <Card.Text className="sub-header">
                    These are primary theme colors.They are used for all the elements including buttons, alerts,
                    background, etc.
                </Card.Text>
                <Row>
                    {(variants || []).map((color, index) => {
                        return (
                            <Col md={4} xl={2} className="text-center" key={index.toString()}>
                                <div className={classNames('rounded', 'p-5', 'bg-' + color)}></div>
                                <h6>{color}</h6>
                            </Col>
                        );
                    })}
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Colors;
