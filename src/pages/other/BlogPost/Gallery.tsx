import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import { LightBox } from 'components/LightBox';

// types
import { GalleryItem } from '../Career/types';

type GalleryProps = {
    gallery: GalleryItem[];
};

const Gallery = ({ gallery }: GalleryProps) => {
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
        <>
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
        </>
    );
};

export default Gallery;
