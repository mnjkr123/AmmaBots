import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Variant } from '../types';

type TextColorsProps = {
    variants: Variant[];
};

const TextColors = ({ variants }: TextColorsProps) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as="h4" className="my-0">
                    Text Colors
                </Card.Title>
                <Card.Text className="sub-header">
                    Even your text can have the contexual color. E.g.{' '}
                    <code>
                        .text-{'{'}primary | secondary | success | danger | info | warning{'}'}
                    </code>
                </Card.Text>
                <Row>
                    {(variants || []).map((color, index) => {
                        return (
                            <Col md={4} xl={2} className="text-center" key={index.toString()}>
                                <div className="bg-white rounded p-2"></div>
                                <h5 className={classNames('text-' + color)}>.text-{color}</h5>
                            </Col>
                        );
                    })}
                </Row>
            </Card.Body>
        </Card>
    );
};

export default TextColors;
