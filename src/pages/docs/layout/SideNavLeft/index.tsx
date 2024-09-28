import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// types
import { MenuItem } from 'types';

// constants
import { MENU_ITEMS } from './menu';

const MenuItemWithChildren = ({ item }: { item: MenuItem }) => {
    return (
        <>
            {(item.children || []).map((item, index) => {
                return (
                    <Nav.Item key={index.toString()}>
                        <NavLink
                            to={item.url!}
                            className={({ isActive }) =>
                                isActive ? 'nav-link doc-nav-link active' : 'nav-link doc-nav-link'
                            }
                        >
                            {item.label}
                        </NavLink>
                    </Nav.Item>
                );
            })}
        </>
    );
};

const SideNav = () => {
    return (
        <div className="px-0 px-sm-4 d-none d-lg-block" id="sidenav-left">
            {(MENU_ITEMS || []).map((item, index) => {
                return (
                    <React.Fragment key={index.toString()}>
                        <h5 className={index === 0 ? '' : 'mt-4'}>{item.label}</h5>
                        <Nav className="flex-column">
                            <MenuItemWithChildren item={item} />
                        </Nav>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default SideNav;
