import { useState } from 'react';
import { Button, Card, Dropdown, Offcanvas } from 'react-bootstrap';

type PlacementOptions = {
    name: string;
    placement?: 'start' | 'end' | 'top' | 'bottom';
};

const OffcanvasPlacement = ({ name, placement }: PlacementOptions) => {
    const [show, setShow] = useState<boolean>(false);

    const toggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <>
            <Button className="btn-soft-primary me-2" onClick={toggle}>
                {name} offcanvas
            </Button>
            <Offcanvas show={show} onHide={toggle} placement={placement}>
                <Offcanvas.Header closeButton>
                    <h5 id="offcanvasTopLabel">Offcanvas {placement}</h5>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                    </div>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="cursor-pointer">
                            Dropdown button <i className="uil uil-angle-down"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

const OffcanvasExample = () => {
    const placementOptions: PlacementOptions[] = [
        {
            name: 'Top',
            placement: 'top',
        },
        {
            name: 'Bottom',
            placement: 'bottom',
        },
        {
            name: 'Left',
            placement: 'start',
        },
        {
            name: 'Right',
            placement: 'end',
        },
    ];

    return (
        <Card id="offcanvas">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Offcanvas
                </Card.Title>
                <p className="sub-header">
                    Build hidden sidebars into your project for navigation, shopping carts, and more. Offcanvas supports
                    a few different placements:
                </p>
                <ul>
                    <li>
                        <code>start</code> places offcanvas on the left of the viewport
                    </li>
                    <li>
                        <code>end</code> places offcanvas on the right of the viewport
                    </li>
                    <li>
                        <code>top</code> places offcanvas on the top of the viewport
                    </li>
                    <li>
                        <code>bottom</code> places offcanvas on the bottom of the viewport
                    </li>
                </ul>

                <div className="button-list">
                    {(placementOptions || []).map((option, index) => (
                        <OffcanvasPlacement key={index.toString()} placement={option.placement!} name={option.name} />
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export default OffcanvasExample;
