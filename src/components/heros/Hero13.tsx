import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image'; // Import Image from next/image

// images
import chatbot from 'assets/images/hero/Chatbot.png';

const Hero13 = () => {
    return (
        <section className="position-relative overflow-hidden hero-7 pt-6 pb-4">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <h1 className="hero-title">
                            Chat with your Bots
                            <span className="highlight highlight-warning d-inline-block">SuperBots</span>
                        </h1>
                        <p className="fs-16 mt-3 text-muted">
                            SuperBots are advanced AI-driven chatbots designed to enhance user interaction and automate
                            various processes across different industries
                        </p>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} className="hero-right">
                        <div className="img-container" data-aos="fade-left" data-aos-duration="600">
                            <Image
                                src={chatbot}
                                alt="chatbot"
                                width={500} // Specify width
                                height={500} // Specify height
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero13;
