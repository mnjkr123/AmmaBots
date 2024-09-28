import { useState } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import { LightBox } from 'components/LightBox';

// types
import { GalleryItem } from './types';

type CultureProps = {
    gallery: GalleryItem[];
};

const Culture = ({ gallery }: CultureProps) => {
    const galleryImages = (gallery || []).map((album) => {
        return album.image;
    });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    // handle lightbox event
    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const moveNext = () => {
        setPhotoIndex((prevState) => (prevState + 1) % galleryImages.length);
    };

    const movePrev = () => {
        setPhotoIndex((prevState) => (prevState + galleryImages.length - 1) % galleryImages.length);
    };

    return (
        <section className="py-7 mt-5 position-relative bg-gradient2">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Our Beliefs
                        </Badge>
                        <h1 className="display-5 fw-semibold">Our Culture</h1>
                        <p className="text-muted mx-auto">
                            At Prompt, We believe in a fully balanced personal and professional life, importance of
                            focus, fun, self-motivation and full transparency.
                        </p>
                    </Col>
                </Row>

                <div className="mt-5">
                    <Row data-aos="fade-up">
                        {(gallery || []).map((item, index) => {
                            return (
                                <Col lg={6} key={index.toString()}>
                                    <Link
                                        to="#"
                                        className="image-popup"
                                        title={item.image!.caption}
                                        onClick={() => openLightbox(index)}
                                    >
                                        <Card className="shadow rounded-sm">
                                            <Card.Body className="p-1">
                                                <img src={item.image!.src} alt="" className="img-fluid rounded-sm" />
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            );
                        })}
                    </Row>
                </div>

                {/* image lightbox */}
                {isOpen && (
                    <LightBox
                        images={galleryImages}
                        photoIndex={photoIndex}
                        closeLightbox={closeLightbox}
                        moveNext={moveNext}
                        movePrev={movePrev}
                    />
                )}
            </Container>
        </section>
    );
};

export default Culture;
