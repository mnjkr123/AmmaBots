import { useState } from 'react';
import { Alert, Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

import { Variant } from '../types';

const OutlineAlerts = () => {
    const [alertVariants, setAlertVariants] = useState<Variant[]>([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
    ]);

    const handleClose = (index: number) => {
        const list = [...alertVariants];
        list.splice(index, 1);
        setAlertVariants(list);
    };

    return (
        <>
            {(alertVariants || []).map((color, index) => {
                return (
                    <Alert
                        variant={color}
                        key={index.toString()}
                        onClose={() => handleClose(index)}
                        dismissible
                        className={classNames('bg-white', 'border', 'text-' + color, {
                            'mb-xxl-0': index === alertVariants.length - 1,
                        })}
                    >
                        <span className={classNames('badge', 'badge-soft-' + color, 'align-items-center', 'me-3')}>
                            {color}
                        </span>
                        A simple {color} alert—check it out!
                    </Alert>
                );
            })}
        </>
    );
};

const DefaultAlerts = () => {
    const [alertVariants, setAlertVariants] = useState<Variant[]>(['danger', 'warning', 'info']);

    const handleClose = (index: number) => {
        const list = [...alertVariants];
        list.splice(index, 1);
        setAlertVariants(list);
    };

    return (
        <>
            {['primary', 'secondary', 'success'].map((color, index) => {
                return (
                    <Alert variant={color} key={index.toString()}>
                        A simple {color} alert—check it out!
                    </Alert>
                );
            })}

            {(alertVariants || []).map((color, index) => {
                return (
                    <Alert
                        variant={color}
                        key={index.toString()}
                        onClose={() => handleClose(index)}
                        dismissible
                        className={classNames({ 'mb-0': index === alertVariants.length - 1 })}
                    >
                        A simple {color} alert—check it out!
                    </Alert>
                );
            })}
        </>
    );
};

const Alerts = () => {
    return (
        <Card id="alerts">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Alerts
                </Card.Title>
                <p className="sub-header">
                    Provide contextual feedback messages for typical user actions with the handful of available and
                    flexible alert messages.
                </p>

                <Row>
                    <Col xxl={6}>
                        <OutlineAlerts />
                    </Col>
                    <Col xxl={6}>
                        <DefaultAlerts />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Alerts;
