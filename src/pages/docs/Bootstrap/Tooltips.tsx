import { Button, Card, OverlayProps, OverlayTrigger, Tooltip } from 'react-bootstrap';

type DirectionsType = {
    placement: OverlayProps['placement'];
};

const Tooltips = () => {
    const directions: DirectionsType[] = [
        { placement: 'top' },
        { placement: 'bottom' },
        { placement: 'right' },
        { placement: 'left' },
    ];

    return (
        <Card id="tooltips">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Tooltips
                </Card.Title>
                <p className="sub-header">
                    Examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and
                    data-attributes for local title storage.
                </p>

                <div className="button-list">
                    {(directions || []).map((item) => (
                        <OverlayTrigger
                            key={item.placement}
                            placement={item.placement}
                            overlay={
                                <Tooltip id={`tooltip-${item.placement}`}>
                                    Tooltip on <strong>{item.placement}</strong>.
                                </Tooltip>
                            }
                        >
                            <Button className="btn-soft-primary me-2">Tooltip on {item.placement}</Button>
                        </OverlayTrigger>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Tooltips;
