import { Card } from 'react-bootstrap';

// component
import ImageGallery1 from './ImageGallery1';
import ImageGallery2 from './ImageGallery2';

// data
import { galleryImages } from '../data';

const Gallery = () => {
    return (
        <Card id="gallery">
            <Card.Body>
                <ImageGallery1 />
                <ImageGallery2 images={galleryImages} />
            </Card.Body>
        </Card>
    );
};

export default Gallery;
