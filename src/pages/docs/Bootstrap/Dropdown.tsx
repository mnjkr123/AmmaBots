import { Button, ButtonGroup, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const DefaultDropdown = () => {
    return (
        <Dropdown className="me-2">
            <Dropdown.Toggle id="dropdown-basic">
                Dropdown Button
                <FeatherIcon icon="chevron-down" className="icon-xs ms-2" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <hr className="my-2" />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const SpiltDropdown = () => {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="secondary">Split Button</Button>
            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">
                <FeatherIcon icon="chevron-down" className="icon-xs" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <hr className="my-2" />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const DropdownDiretion = () => {
    return (
        <>
            <p className="sub-header mt-4">
                Trigger dropdown menus above, below, left, or to the right of their toggle elements, with the drop prop.
            </p>
            <div className="d-flex">
                <DropdownButton
                    variant="success"
                    align="end"
                    title={
                        <>
                            Dropdown end
                            <FeatherIcon icon="chevron-down" className="icon-xs ms-2" />
                        </>
                    }
                    id="dropdown-menu-align-end"
                    className="me-2"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <hr className="my-2" />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    variant="info"
                    drop="end"
                    title={
                        <>
                            Drop End
                            <FeatherIcon icon="chevron-right" className="icon-xs ms-2" />
                        </>
                    }
                    id="dropdown-menu-end"
                    className="me-2"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <hr className="my-2" />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    variant="danger"
                    drop="start"
                    title={
                        <>
                            <FeatherIcon icon="chevron-left" className="icon-xs me-2" />
                            Drop Start
                        </>
                    }
                    id="dropdown-menu-start"
                    className="me-2"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <hr className="my-2" />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    title={
                        <>
                            On Hover
                            <FeatherIcon icon="chevron-down" className="icon-xs ms-2" />
                        </>
                    }
                    id="dropdown-menu-on-hover"
                    renderMenuOnMount
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <hr className="my-2" />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
            </div>
        </>
    );
};

const CustomeDropdown = () => {
    return (
        <div>
            <p className="sub-header mt-4">
                You can put a form or simple text within a dropdown menu or set the different position
            </p>
            <Dropdown as={ButtonGroup} className="me-2">
                <Dropdown.Toggle className="cursor-pointer">
                    Simple text
                    <FeatherIcon icon="chevron-down" className="icon-xs ms-2" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-lg p-3">
                    <div className="text-muted">
                        <p>Some example text that's free-flowing within the dropdown menu.</p>
                        <p className="mb-0">And this is more example text.</p>
                    </div>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="secondary" className="cursor-pointer">
                    Dropdown menu Forms
                    <FeatherIcon icon="chevron-down" className="icon-xs ms-2" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-lg p-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleDropdownFormEmail1"
                                placeholder="email@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleDropdownFormPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" htmlFor="dropdownCheck">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </form>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

const Dropdowns = () => {
    return (
        <Card id="dropdowns">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Dropdowns
                </Card.Title>

                <p className="sub-header">
                    Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown
                    plugin.
                </p>

                <div className="d-sm-inline-flex mb-2 mb-sm-0">
                    <DefaultDropdown />
                    <SpiltDropdown />
                </div>

                <DropdownDiretion />
                <CustomeDropdown />
            </Card.Body>
        </Card>
    );
};

export default Dropdowns;
