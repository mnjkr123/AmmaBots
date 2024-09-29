import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
import Image from 'next/image'; // Import Image component from Next.js

// hooks
import { useUser } from '../../hooks/auth';

// component
import Menu from './Menu';

// images
import logo from '../../assets/images/logo.png';

type Navbar2Props = {
    isSticky?: boolean;
    navClass?: string;
    fixedWidth?: boolean;
    hideSearch?: boolean;
};

const Navbar2 = ({ isSticky, navClass, fixedWidth, hideSearch }: Navbar2Props) => {
    const [loggedInUser] = useUser();

    // on scroll add navbar class and back to top button
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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />
                    <Navbar.Brand href="/" className="me-lg-4 me-auto">
                        {/* Replace <img> with <Image /> */}
                        <Image
                            src={logo} // Image source
                            alt="Logo" // Alt text for accessibility
                            height={30} // Specify height
                            width={150} // Specify width
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {!hideSearch && (
                            <Nav className="align-items-lg-center d-flex">
                                <Nav.Item as="li">
                                    <form id="search" className="form-inline d-none d-sm-flex me-lg-3">
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

                        <Menu showDownload loggedInUser={loggedInUser} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar2;
