import { Card, Carousel } from 'react-bootstrap';

// images
import FirstSlide from '../../../assets/images/photos/1.jpg';
import SecondSlide from '../../../assets/images/photos/2.jpg';
import ThirdSlide from '../../../assets/images/photos/3.jpg';

const DefaultCarousel = () => {
    return (
        <>
            <p className="sub-header">
                A slideshow component for cycling through elements—images or slides of text—like a carousel.
            </p>
            <Carousel className="doc-carousel">
                <Carousel.Item>
                    <img src={FirstSlide} alt="First Slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={SecondSlide} alt="Second Slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ThirdSlide} alt="Third Slide" className="d-block w-100" />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

const CaptionCarousel = () => {
    return (
        <>
            <p className="sub-header mt-4">
                Add captions to your slides easily with the <code>.carousel-caption</code> element within any{' '}
                <code>.carousel-item</code>.
            </p>
            <Carousel className="doc-carousel">
                <Carousel.Item>
                    <img src={FirstSlide} alt="First Slide" className="d-block w-100" />
                    <Carousel.Caption>
                        <h3 className="text-white">First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={SecondSlide} alt="Second Slide" className="d-block w-100" />
                    <Carousel.Caption>
                        <h3 className="text-white">Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={ThirdSlide} alt="Third Slide" className="d-block w-100" />
                    <Carousel.Caption>
                        <h3 className="text-white">Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

const Carousels = () => {
    return (
        <Card id="carousel">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Carousel
                </Card.Title>
                <DefaultCarousel />
                <CaptionCarousel />
            </Card.Body>
        </Card>
    );
};

export default Carousels;
