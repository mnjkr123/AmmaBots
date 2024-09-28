import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Variant } from '../types';

type BackgroundsProps = {
    variants: Variant[];
};

const Backgrounds = ({ variants }: BackgroundsProps) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as="h4" className="my-0">
                    Background
                </Card.Title>
                <Card.Text className="sub-header">
                    Use the contexual class to have background with different shades. E.g.{' '}
                    <code>
                        .bg-{'{'}primary | secondary | success | danger | info | warning{'}'}
                    </code>
                </Card.Text>
                <Row>
                    {(variants || []).map((color, index) => {
                        return (
                            <Col md={4} xl={2} className="text-center" key={index.toString()}>
                                <div className={classNames('rounded', 'p-3', 'mb-3', 'mb-xl-0', 'bg-' + color)}>
                                    <h5 className="text-white">.bg-{color}</h5>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Card.Text className="sub-header mt-4">
                    Each color has a translucent shade too. It adds a little transparency. E.g.{' '}
                    <code>
                        .bg-soft-{'{'}primary | secondary | success | danger | info | warning{'}'}
                    </code>
                </Card.Text>
                <Row>
                    {(variants || []).map((color, index) => {
                        return (
                            <Col md={4} xl={2} className="text-center" key={index.toString()}>
                                <div className={classNames('rounded', 'p-3', 'mb-3', 'mb-xl-0', 'bg-soft-' + color)}>
                                    <h5 className={classNames('text-' + color, 'my-0')}>.bg-soft-{color}</h5>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Backgrounds;
