import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

// component
import { LightBox } from 'components/LightBox';

// dummmy data
import { gallery } from './data';

const Gallery = () => {
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
            <Row className="filterable-content position-relative">
                {(gallery || []).map((item, index) => {
                    return (
                        <Col lg={6} key={index.toString()} className="filter-item  all web illustrator">
                            <div className="gal-box">
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
                            </div>
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
