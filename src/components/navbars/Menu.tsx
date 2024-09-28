import { Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    let location = useLocation();

    const isActiveRoute = (path: string) => {
        if (location.pathname) {
            return location.pathname.includes(path);
        }
        return false;
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            <Nav.Item as="li">
                <NavLink to="/home" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Home
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink
                    to="/Service"
                    end
                    className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Services
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink
                    to="/Chatbot"
                    end
                    className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Chatbot
                </NavLink>
            </Nav.Item>
            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarPages"
                    className={classNames(isActiveRoute('/pages') ? 'active' : '')}>
                    Pages <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu renderOnMount>
                    <Nav as={'ul'} navbar={false}>
                        <Dropdown as={'li'} className="nav-item" aria-labelledby="navbarPages">
                            <Dropdown.Toggle
                                as={Nav.Link}
                                id="accountPages"
                                className={classNames(isActiveRoute('/pages/account') ? 'active' : '')}>
                                Account <div className="arrow"></div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu renderOnMount>
                                <Nav as="ul" navbar={false}>
                                    <Nav.Item as="li">
                                        <NavLink
                                            to="/pages/account/dashboard"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}>
                                            Dashboard
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <NavLink
                                            to="/pages/account/settings"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}>
                                            Settings
                                        </NavLink>
                                    </Nav.Item>
                                </Nav>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown as={'li'} className="nav-item" aria-labelledby="navbarPages">
                            <Dropdown.Toggle
                                as={Nav.Link}
                                id="blogPages"
                                className={classNames(isActiveRoute('/pages/blog') ? 'active' : '')}>
                                Blog <div className="arrow"></div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu renderOnMount>
                                <Nav as="ul" navbar={false}>
                                    <NavLink
                                        to="/pages/blog"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        Blog
                                    </NavLink>
                                    <NavLink
                                        to="/pages/blog/post"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                        Blog Post
                                    </NavLink>
                                </Nav>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/pages/company"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Company
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/pages/contact"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Contact
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/pages/career"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Career
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/pages/pricing"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Pricing
                            </NavLink>
                        </Nav.Item>

                        <Dropdown as={'li'} className="nav-item" aria-labelledby="navbarPages">
                            <Dropdown.Toggle
                                as={Nav.Link}
                                id="portfolioPages"
                                className={classNames(isActiveRoute('/pages/portfolio') ? 'active' : '')}>
                                Portfolio <div className="arrow"></div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu renderOnMount>
                                <Nav as="ul" navbar={false}>
                                    <Nav.Item as="li">
                                        <NavLink
                                            to="/pages/portfolio/grid"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}>
                                            Portfolio Grid
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <NavLink
                                            to="/pages/portfolio/masonry"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}>
                                            Portfolio Masonry
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <NavLink
                                            to="/pages/portfolio/item"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}>
                                            Portfolio Item
                                        </NavLink>
                                    </Nav.Item>
                                </Nav>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/pages/help"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Help
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarDocs"
                    className={classNames(
                        isActiveRoute('/docs/introduction') ||
                            isActiveRoute('/docs/bootstrap') ||
                            isActiveRoute('/docs/change-log')
                            ? 'active'
                            : ''
                    )}>
                    Docs <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu renderOnMount>
                    <Nav as={'ul'} navbar={false}>
                        <Nav.Item as="li">
                            <NavLink
                                to="/docs/introduction"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Getting Started
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink
                                to="/docs/bootstrap"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Components
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink
                                to="/docs/change-log"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                                Change Log
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>

            {showDownload && (
                <>
                    {loggedInUser ? (
                        <Nav.Item as="li">
                            <NavLink to="/auth/logout" className="nav-link btn me-2 shadow-none">
                                Logout
                            </NavLink>
                        </Nav.Item>
                    ) : (
                        <Nav.Item as="li">
                            <NavLink to="/auth/login" className="nav-link btn me-2 shadow-none">
                                Log In
                            </NavLink>
                        </Nav.Item>
                    )}

                    <Nav.Item as="li">
                        <Link to="#" className={classNames('btn', buttonClass)}>
                            Download
                        </Link>
                    </Nav.Item>
                </>
            )}
        </Nav>
    );
};

export default Menu;
