import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

// Images
import logo from '../../assets/images/logo.png';
import Image from 'next/image'; // Import Image from next/image

// SVG Component for MailOpened
const MailOpened = () => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 98 98" version="1.1" xmlns="http://www.w3.org/2000/svg">
            {/* SVG contents */}
        </svg>
    );
};

const Confirm = () => {
    const { t } = useTranslation();

    // Get the user's email from sessionStorage
    const userEmail = sessionStorage.getItem('signupEmail');

    // Log the email to the console (optional, for debugging)
    console.log('User email:', userEmail); // This should now log the email

    // Clear the email from sessionStorage on component unmount
    useEffect(() => {
        // Cleanup function to remove email from sessionStorage
        return () => {
            sessionStorage.removeItem('signupEmail');
        };
    }, []);

    return (
        <div className="bg-gradient2 min-vh-100 align-items-center d-flex justify-content-center pt-2 pt-sm-5 pb-4 pb-sm-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={6} md={10} lg={8}>
                        <div className="mx-auto mb-3">
                            <Link to="/" className="d-flex justify-content-center align-items-center">
                                <Image
                                    src={logo} // Use the logo image
                                    alt="logo" // Provide meaningful alt text for accessibility
                                    height={30} // Set height
                                    width={100} // Set width (adjust as necessary)
                                    className="align-self-center"
                                />
                            </Link>
                        </div>
                        <Card>
                            <Card.Body className="p-0">
                                <div className="p-4 text-center">
                                    <h4 className="mt-3">{t('Please check your inbox')}</h4>

                                    <div className="py-3">
                                        <span className="icon icon-xxl text-info">
                                            <MailOpened />
                                        </span>
                                    </div>

                                    <p className="text-muted mb-4">
                                        {t('We sent a confirmation link to you at: ')}
                                        <span className="text-dark fw-medium">{userEmail || 'N/A'}</span>
                                    </p>

                                    <p className="text-muted mb-0 fs-13">
                                        {t('Simply click on the link available in the email to confirm your account.')}
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>

                        <Row className="mt-3">
                            <Col xs={12} className="text-center">
                                <p className="text-muted">
                                    {t('Back to')}
                                    <Link to="/auth/login" className="text-primary fw-semibold ms-1">
                                        {t('Log In')}
                                    </Link>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Confirm;
