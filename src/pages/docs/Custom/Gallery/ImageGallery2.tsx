import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LightBox, ImageType } from 'components/LightBox';

type ImageGallery2Props = {
    images: ImageType[];
};

const ImageGallery2 = ({ images }: ImageGallery2Props) => {
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
        setPhotoIndex((prevState) => (prevState + 1) % images.length);
    };

    const movePrev = () => {
        setPhotoIndex((prevState) => (prevState + images.length - 1) % images.length);
    };

    return (
        <>
            <h5>Grid Example</h5>
            <Row className="filterable-content position-relative">
                <Col lg={5} className="filter-item  all web illustrator">
                    <div className="gal-box">
                        <Link to="#" className="image-popup" title="" onClick={() => openLightbox(0)}>
                            <img src={images[0].src} alt="" className="img-fluid rounded-sm" />
                        </Link>
                    </div>
                </Col>
                <Col lg={7} className="filter-item  all web illustrator">
                    <Row>
                        <Col md={6}>
                            <div className="gal-box">
                                <Link to="#" className="image-popup" title="" onClick={() => openLightbox(1)}>
                                    <img src={images[1].src} alt="" className="img-fluid rounded-sm" />
                                </Link>
                            </div>
                            <div className="gal-box">
                                <Link to="#" className="image-popup" title="" onClick={() => openLightbox(2)}>
                                    <img src={images[2].src} alt="" className="img-fluid rounded-sm" />
                                </Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="gal-box">
                                <Link to="#" className="image-popup" title="" onClick={() => openLightbox(3)}>
                                    <img src={images[3].src} alt="" className="img-fluid rounded-sm" />
                                </Link>
                            </div>
                            <div className="gal-box">
                                <Link to="#" className="image-popup" title="" onClick={() => openLightbox(4)}>
                                    <img src={images[4].src} alt="" className="img-fluid rounded-sm" />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* image lightbox */}
            {isOpen && (
                <LightBox
                    images={images}
                    photoIndex={photoIndex}
                    closeLightbox={closeLightbox}
                    moveNext={moveNext}
                    movePrev={movePrev}
                />
            )}
        </>
    );
};

export default ImageGallery2;
