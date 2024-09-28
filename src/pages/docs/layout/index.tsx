import { Container, Col, Row } from 'react-bootstrap';

// components
import { Navbar3 } from 'components/navbars';
// types
import { MenuItem } from 'types';

import SideNav from './SideNavLeft';
import SideNavRight from './SideNavRight';

type DocsLayoutProps = {
    children: React.ReactNode;
    rightMenuItems?: MenuItem[];
};

const DocsLayout = ({ children, rightMenuItems }: DocsLayoutProps) => {
    return (
        <>
            <Navbar3 navClass="shadow fixed-top navbar-light bg-white" buttonClass="btn-outline-primary btn-sm" />
            <div className="content py-0 py-sm-4 px-0 px-sm-3 bg-light min-vh-100">
                <Container fluid>
                    <Row>
                        <Col xs={12} xl={2} md={3} className={rightMenuItems && 'sidenav sidenav-left'}>
                            <SideNav />
                        </Col>
                        {children}

                        {rightMenuItems && (
                            <Col xs={12} lg={2} xl={2} className="d-none d-xl-block px-xl-0 sidenav sidenav-right">
                                <SideNavRight menuItems={rightMenuItems} />
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default DocsLayout;
