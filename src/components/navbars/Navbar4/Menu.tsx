import { Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Menu = () => {
    return (
        <Nav as="ul" className="mx-auto">
            <Nav.Item as="li" className="pe-3">
                <Nav.Link href="/" className="active">
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0">
                            <FeatherIcon icon="grid" className="icon-dual-primary" />
                        </span>
                        <div className="flex-grow-1">Home</div>
                    </div>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li" className="pe-3">
                <Nav.Link href="/">
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0">
                            <FeatherIcon icon="folder" className="icon-dual-dark" />
                        </span>
                        <div className="flex-grow-1">Projects</div>
                    </div>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li" className="pe-3">
                <Nav.Link href="/">
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0">
                            <FeatherIcon icon="list" className="icon-dual-dark" />
                        </span>
                        <div className="flex-grow-1">Tasks</div>
                    </div>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li" className="pe-3">
                <Nav.Link href="/">
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0">
                            <FeatherIcon icon="bar-chart-2" className="icon-dual-dark" />
                        </span>
                        <div className="flex-grow-1">Reports</div>
                    </div>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li" className="pe-3">
                <Nav.Link href="/">
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0">
                            <FeatherIcon icon="tool" className="icon-dual-dark" />
                        </span>
                        <div className="flex-grow-1">Settings</div>
                    </div>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Menu;
