import { Button, Card, OverlayProps, OverlayTrigger, Popover } from 'react-bootstrap';

type DirectionsType = {
    placement: OverlayProps['placement'];
};

const Popovers = () => {
    const directions: DirectionsType[] = [
        { placement: 'top' },
        { placement: 'bottom' },
        { placement: 'right' },
        { placement: 'left' },
    ];

    return (
        <Card id="popovers">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Popovers
                </Card.Title>
                <p className="sub-header">
                    Add small overlays of content, like those on the iPad, to any element for housing secondary
                    information.
                </p>

                <div className="button-list">
                    {(directions || []).map((item) => (
                        <OverlayTrigger
                            trigger="click"
                            key={item.placement}
                            placement={item.placement}
                            overlay={
                                <Popover id={`popover-positioned-${item.placement}`}>
                                    <Popover.Body>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                    </Popover.Body>
                                </Popover>
                            }>
                            <Button className="btn-soft-primary me-2 mb-2 mb-xxl-0">Popover on {item.placement}</Button>
                        </OverlayTrigger>
                    ))}

                    <OverlayTrigger
                        trigger="focus"
                        placement="right"
                        overlay={
                            <Popover id={`popover-dismissible`}>
                                <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
                            </Popover>
                        }>
                        <Button className="me-2 mb-2 mb-xxl-0">Dismissible popover</Button>
                    </OverlayTrigger>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Popovers;
