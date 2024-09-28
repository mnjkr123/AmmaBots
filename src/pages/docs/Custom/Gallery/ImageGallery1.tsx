import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

// component
import { LightBox } from 'components/LightBox';

// dummy data
import { gallery } from '../data';

const ImageGallery1 = () => {
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
            <Card.Title as="h5" className="mb-0">
                Gallery
            </Card.Title>
            <p className="sub-header">A flexible lightbox component for displaying images in a React project.</p>

            <h5>Simple Example</h5>
            <Row className="filterable-content position-relative">
                {(gallery || []).map((item, index) => {
                    return (
                        <Col sm={6} xl={4} key={index.toString()} className="filter-item  all web illustrator">
                            <div className="gal-box">
                                <Link
                                    to="#"
                                    className="image-popup"
                                    title={item.image!.caption}
                                    onClick={() => openLightbox(index)}
                                >
                                    <img src={item.image!.src} alt="" className="img-fluid rounded-sm" />
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

export default ImageGallery1;
