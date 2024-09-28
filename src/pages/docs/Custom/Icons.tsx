import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

const FeatherIconExample = () => {
    return (
        <>
            <Card.Title as="h5" className="mt-4 mb-0">
                Feather Icons
            </Card.Title>
            <p className="sub-header">
                Feather is a collection of simply beautiful svg based open source icons. Each icon is designed with an
                emphasis on simplicity, consistency, and flexibility. To use an icon on your page, add a{' '}
                <code>data-feather</code> attribute with the icon name to an element.
            </p>
            <Row>
                <Col md={'auto'}>
                    <FeatherIcon icon="activity" className="me-2" />
                    <FeatherIcon icon="shopping-bag" className="me-2" />
                    <FeatherIcon icon="credit-card" className="me-2" />
                    <FeatherIcon icon="message-square" className="me-2" />
                    <FeatherIcon icon="map-pin" className="me-2" />
                    <FeatherIcon icon="bell" className="me-2" />
                    <FeatherIcon icon="calendar" className="me-2" />
                    <FeatherIcon icon="map" />
                </Col>
            </Row>
            <p className="sub-header mt-4">
                For a complete list of icons, check{' '}
                <a href="https://feathericons.com/" className="text-primary" target="_blank" rel="noreferrer">
                    here
                </a>
                .
            </p>

            <p className="sub-header mt-4">
                Use modifier class <code>.icon-dual</code> to convert it into two-tone. All the color variations are
                available as well. E.g.{' '}
                <code>
                    icon-dual-{'{'}primary | secondary | success | danger | info | warning{'}'}.
                </code>
            </p>
            <Row>
                <Col md={'auto'}>
                    <FeatherIcon icon="activity" className="icon-dual me-2" />
                    <FeatherIcon icon="shopping-bag" className="icon-dual-primary me-2" />
                    <FeatherIcon icon="credit-card" className="icon-dual-secondary me-2" />
                    <FeatherIcon icon="message-square" className="icon-dual-success me-2" />
                    <FeatherIcon icon="map-pin" className="icon-dual-danger me-2" />
                    <FeatherIcon icon="bell" className="icon-dual-info me-2" />
                    <FeatherIcon icon="calendar" className="icon-dual-warning" />
                </Col>
            </Row>
            <p className="sub-header mt-4">
                Use size modifier class
                <code>
                    .icon-{'{'}xxs | xs | sm | md | lg | xl | xxl{'}'}
                </code>{' '}
                to change the size.
            </p>
            <Row>
                <Col xs={'auto'}>
                    {['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'].map((size, index) => {
                        return (
                            <FeatherIcon
                                icon="message-circle"
                                className={classNames('icon-' + size, 'me-2')}
                                key={index.toString()}
                            />
                        );
                    })}
                </Col>
            </Row>
        </>
    );
};

const IconExample = () => {
    return (
        <Card id="icons">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Icons
                </Card.Title>
                <p className="sub-header">
                    Prompt comes with icon library:{' '}
                    <a href="https://feathericons.com/" target="_blank" rel="noreferrer">
                        Feather Icons
                    </a>
                </p>
                <FeatherIconExample />
            </Card.Body>
        </Card>
    );
};

export default IconExample;
