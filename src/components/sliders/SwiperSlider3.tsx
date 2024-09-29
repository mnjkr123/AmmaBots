import React from 'react';
import { Link } from 'react-router-dom';

// swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'; // Import Image component

// images
import saas1 from 'assets/images/hero/saas1.jpg';
import saas2 from 'assets/images/hero/saas2.jpg';
import saas3 from 'assets/images/hero/saas3.jpg';

const SwiperSlider3 = () => {
    const swiperConfig = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            '576': { slidesPerView: 1.2 },
            '768': { slidesPerView: 1 },
        },
        roundLengths: true,
    };

    const images = [saas1, saas2, saas3];

    return (
        <Swiper modules={[Autoplay]} {...swiperConfig}>
            {images.map((img, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <div className="swiper-slide-content">
                            <div className="video-overlay d-flex align-items-center justify-content-center">
                                <Link to="#" className="btn-play success"></Link>
                            </div>
                            {/* Replace img with Image component */}
                            <Image
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="img-fluid rounded-lg"
                                width={1200} // Provide appropriate width based on the design
                                height={675} // Provide appropriate height based on the design
                            />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider3;
