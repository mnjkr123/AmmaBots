import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';
import Masonry from 'react-masonry-css';

import { LightBox, ImageType } from 'components/LightBox';
import { GalleryItem } from '../types';

type GalleryProps = {
    galleryItems: GalleryItem[];
};

const Gallery = ({ galleryItems }: GalleryProps) => {
    const [gallery, setGallery] = useState<GalleryItem[]>(galleryItems);
    const [category, setCategory] = useState<string>('all');

    const [galleryImages, setGalleryImages] = useState<ImageType[]>(galleryItems.map((album) => album.image));

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    const filterImages = (category: string) => {
        setCategory(category);
        setTimeout(() => {
            const galleryAlbums =
                category === 'all' ? galleryItems : galleryItems.filter((album) => album.category?.includes(category));
            setGallery(galleryAlbums);
            setGalleryImages(galleryAlbums.map((album) => album.image));
        }, 300);
    };

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
            <Row>
                <Col xs={12}>
                    <div className="text-center filter-menu">
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', { active: category === 'all' })}
                            onClick={() => filterImages('all')}>
                            All
                        </Link>
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', { active: category === 'web' })}
                            onClick={() => filterImages('web')}>
                            Web Design
                        </Link>
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', { active: category === 'graphic' })}
                            onClick={() => filterImages('graphic')}>
                            Graphic Design
                        </Link>
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', { active: category === 'illustrator' })}
                            onClick={() => filterImages('illustrator')}>
                            Illustrator
                        </Link>
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', { active: category === 'photography' })}
                            onClick={() => filterImages('photography')}>
                            Photography
                        </Link>
                    </div>
                </Col>
            </Row>

            <Masonry
                breakpointCols={{ default: 3, 750: 2, 350: 1 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {gallery.map((galleryItem, index) => (
                    <Card className="card-portfolio-item mb-0 shadow border filter-item" key={index.toString()}>
                        <div className="p-2">
                            <div className="card-zoom">
                                <Link
                                    to="#"
                                    className="image-popup"
                                    title={galleryItem.image!.caption}
                                    onClick={() => openLightbox(index)}>
                                    <img src={galleryItem.image!.src} alt="galleryImage" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <Card.Body className="p-2">
                            <div className="mt-2">
                                <h5 className="mt-0">{galleryItem.title}</h5>
                                <p className="text-muted mb-1">{galleryItem.description}</p>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Masonry>

            <div className="text-center mt-5 pb-md-0">
                <Link to="#" className="btn btn-primary">
                    <FeatherIcon icon="refresh-ccw" className="icon-xxs me-2" />
                    Load More
                </Link>
            </div>

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
