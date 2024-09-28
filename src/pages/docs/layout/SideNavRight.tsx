import { Nav } from 'react-bootstrap';

// types
import { MenuItem } from 'types';

type SideNavRightProps = {
    menuItems: MenuItem[];
};

const SideNavRight = ({ menuItems }: SideNavRightProps) => {
    return (
        <div className="border-left-lg">
            <Nav navbarScroll className="flex-column">
                {(menuItems || []).map((item, index) => {
                    return (
                        <Nav.Item key={index.toString()}>
                            <Nav.Link href={'#' + item.key}>{item.label}</Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>
        </div>
    );
};

export default SideNavRight;
