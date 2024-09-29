import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames';

// hooks
import { useUser } from '../../hooks/auth';

// components
import Menu from './Menu';

// images
import logo from '../../assets/images/logo.png';
import logoLight from '../../assets/images/logo-light.png';
import Image from 'next/image'; // Import the Image component

type Navbar1Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
    hideSearch?: boolean;
};

// Assuming User type is defined with id and name
type User = {
    id: string;
    name: string;
    // other properties...
};

const Navbar1 = ({ isSticky, navClass, buttonClass, fixedWidth, hideSearch }: Navbar1Props) => {
    const [loggedInUser] = useUser();

    // Create a user object if loggedInUser exists
    const user: User | null = loggedInUser ? { id: loggedInUser.id, name: loggedInUser.name } : null;

    // on scroll add navbar class
    useEffect(() => {
        const btnTop = document.getElementById('btn-back-to-top');
        const navbar = document.getElementById('sticky');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (btnTop) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    btnTop.classList.add('show');
                } else {
                    btnTop.classList.remove('show');
                }
            }
            if (navbar) {
                if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240) {
                    navbar.classList.add('navbar-sticky');
                } else {
                    navbar.classList.remove('navbar-sticky');
                }
            }
        });
    }, []);

    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass)}>
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/" className="logo">
                        <Image src={logo} height={30} className="align-top logo-dark" alt="Logo" />
                        <Image src={logoLight} height={30} className="align-top logo-light" alt="Light Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="topnav-menu-content">
                        {!hideSearch && (
                            <Nav className="align-items-lg-center d-flex me-auto">
                                <Nav.Item as="li">
                                    <form id="search" className="form-inline d-none d-sm-flex">
                                        <div className="form-control-with-hint ms-lg-2 ms-xl-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="search-input"
                                                placeholder="What are you looking for?"
                                            />
                                            <span className="form-control-feedback uil uil-search fs-16"></span>
                                        </div>
                                    </form>
                                </Nav.Item>
                            </Nav>
                        )}
                        <Menu
                            showDownload
                            loggedInUser={user} // Passing User type
                            navClass="ms-auto"
                            buttonClass={buttonClass ? buttonClass : 'btn-primary'}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar1;
