import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcon from 'feather-icons-react';

// component
import { FormInput, VerticalForm } from 'components/form';

interface UserData {
    name: string;
    email: string;
    message: string;
}

const CTA = () => {
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter name'),
            email: yup.string().required('Please enter email').email('Please enter valid email'),
            message: yup.string().required('Please enter message'),
        })
    );

    // handle form submission
    const onSubmit = () => { };

    return (
        <>
            <section className="section pt-lg-8 pb-lg-4 pt-4 pb-3 position-relative" id="contact-me-form">
                <Container className="testimonials-3">
                    <Row className="align-items-center">
                        <Col lg={6} data-aos="fade-up" data-aos-duration="600">
                            <h1 className="display-5 fw-medium">Just say hi.</h1>
                            <p>
                                I am open to discuss your next project, improve user experience of an existing one or
                                help with your UX/UI design challenges.
                            </p>

                            <div className="mt-5 text-muted">Email me at</div>
                            <div>
                                <h4 className="mt-0 fw-medium">
                                    <Link
                                        to="#"
                                        onClick={() => (window.location.href = 'mailto:support@coderthemes.com')}
                                    >
                                        hello@coderthemes.com
                                    </Link>
                                </h4>
                            </div>

                            <div className="mt-5 text-muted">Social</div>
                            <ul className="list-inline mt-1">
                                <li className="list-inline-item me-3">
                                    <Link to="#">
                                        <FeatherIcon icon="dribbble" className="icon-xs icon-dual" />
                                    </Link>
                                </li>
                                <li className="list-inline-item me-3">
                                    <Link to="#">
                                        <FeatherIcon icon="facebook" className="icon-xs icon-dual" />
                                    </Link>
                                </li>
                                <li className="list-inline-item me-3">
                                    <Link to="#">
                                        <FeatherIcon icon="twitter" className="icon-xs icon-dual" />
                                    </Link>
                                </li>
                                <li className="list-inline-item me-3">
                                    <Link to="#">
                                        <FeatherIcon icon="linkedin" className="icon-xs icon-dual" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <FeatherIcon icon="instagram" className="icon-xs icon-dual" />
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} data-aos="fade-up" data-aos-duration="900">
                            <VerticalForm<UserData>
                                onSubmit={onSubmit}
                                resolver={schemaResolver}
                                formClass="mt-5 mt-lg-0"
                            >
                                <FormInput type="text" name="name" placeholder="Your Name" containerClass={'mb-3'} />

                                <FormInput
                                    type="email"
                                    name="email"
                                    placeholder="Your email where we can reach"
                                    containerClass={'mb-3'}
                                />

                                <FormInput type="text" name="subject" placeholder="Subject" containerClass={'mb-3'} />

                                <FormInput
                                    type="textarea"
                                    name="message"
                                    placeholder="Write your message here. Keep it simple, concise and intriguing!"
                                    rows={5}
                                    containerClass={'mb-3'}
                                />

                                <div className="mb-0 text-end">
                                    <Button variant="danger" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </VerticalForm>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CTA;
