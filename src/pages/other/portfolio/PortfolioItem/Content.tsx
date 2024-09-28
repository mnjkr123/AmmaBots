import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// component
import Gallery from './Gallery';

// types
import { WorkImages } from '../types';

type ContentProps = {
    workImages: WorkImages[];
};

const Content = ({ workImages }: ContentProps) => {
    return (
        <section className="position-relative">
            <Container>
                <Row>
                    <Col lg={12}>
                        <figure className="figure">
                            <img
                                src="https://source.unsplash.com/GXNo-OJynTQ/1920x720"
                                alt="contentImage"
                                className="figure-img img-fluid rounded"
                            />

                            <figcaption className="figure-caption text-center">
                                The image caption referencing the above image
                            </figcaption>
                        </figure>
                    </Col>
                </Row>

                {/* description */}
                <Row className="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={6}>
                        <div className="pe-4">
                            <h3>About Client</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae
                                at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex,
                                distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus
                                consequatur. Sed dicta maiores, eos culpa.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ps-4">
                            <h3>Project Description</h3>
                            <p>
                                Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum
                                nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam
                                perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla,
                                cupiditate iste vel unde magni.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* image */}
                <Row className="mt-5">
                    <Col lg={12}>
                        <Gallery />
                    </Col>
                </Row>

                {/* work description */}
                <Row className="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={12}>
                        <h3>What We Did?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at
                            inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio
                            eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed
                            dicta maiores, eos culpa.
                        </p>

                        <Row className="mt-5">
                            {(workImages || []).map((workImage, index) => {
                                return (
                                    <Col lg={4} key={index.toString()}>
                                        <div className="d-flex align-items-center mb-2 mb-xl-0">
                                            <span className="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                                <FeatherIcon icon={workImage.icon} className="icon-dual-primary" />
                                            </span>
                                            <div className="flex-grow-1">
                                                <h5 className="my-0">{workImage.title}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>

                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at
                            inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio
                            eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed
                            dicta maiores, eos culpa.
                        </p>

                        <h5 className="mt-5">Technologies Used</h5>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Sketch & Illustrator
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Raact JS
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Django - A Web Framework in Python
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            PostgreSQL - Relational Database System
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;
