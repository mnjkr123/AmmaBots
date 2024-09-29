import { Badge, Button, Card } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Variant } from '../types';

type BadgesProps = {
    variants: Variant[];
};

const Badges = ({ variants }: BadgesProps) => {
    return (
        <Card id="badges">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Badges
                </Card.Title>
                <p className="sub-header">
                    Badges scale to match the size of the immediate parent element by using relative font sizing and{' '}
                    <code>em</code> units.
                </p>

                <h1>
                    Example heading <Badge bg="secondary">New</Badge>{' '}
                </h1>
                <h2>
                    Example heading <Badge bg="secondary">New</Badge>{' '}
                </h2>
                <h3>
                    Example heading <Badge bg="secondary">New</Badge>{' '}
                </h3>
                <h4>
                    Example heading <Badge bg="secondary">New</Badge>{' '}
                </h4>
                <h5>
                    Example heading <Badge bg="secondary">New</Badge>{' '}
                </h5>
                <h6>
                    Example heading <Badge bg="secondary">New</Badge>{' '}
                </h6>

                <p className="mt-4">Badges can be used as part of links or buttons to provide a counter.</p>

                <Button className="btn-primary">
                    Notifications
                    <Badge className="ms-1" bg="light" text="dark">
                        4
                    </Badge>
                </Button>

                <p className="mt-4">
                    Add any of the below mentioned modifier classes to change the appearance of a badge.
                </p>

                {[...variants, 'light'].map((item, index) => {
                    return (
                        <Badge
                            key={index.toString()}
                            className={classNames('me-1', item === 'light' && 'text-dark')}
                            bg={item}>
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Badge>
                    );
                })}

                <p className="mt-4">
                    badges Use the <code>pill</code> modifier class to make badges more rounded (with a larger
                    border-radius).
                </p>

                <Badge bg="primary" pill>
                    Pill
                </Badge>
                <Badge bg="primary" pill className="badge-md mx-1">
                    Badge-md
                </Badge>
                <Badge bg="primary" pill className="badge-lg">
                    Badge-lg
                </Badge>

                <p className="mt-4">
                    Use the <code>.badge-soft-*</code> modifier class to make badges soft.
                </p>

                {(variants || []).map((item, index) => {
                    return (
                        <Badge key={index.toString()} className={classNames('me-1', 'badge-soft-' + item)} bg="">
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Badge>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default Badges;
