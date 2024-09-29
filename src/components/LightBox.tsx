import ModalImage from 'react-modal-image';

export type ImageType = {
    src: string;
    caption: string;
};

type LightBoxProps = {
    images: ImageType[];
    photoIndex: number;
    closeLightbox: () => void;
    moveNext: () => void;
    movePrev: () => void;
};

const LightBox = ({ images, photoIndex, closeLightbox, moveNext, movePrev }: LightBoxProps) => {
    return (
        <ModalImage
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={movePrev}
            onMoveNextRequest={moveNext}
            imageTitle={images[photoIndex].caption} // Assuming caption is a string
            mainSrcThumbnail={images[photoIndex].src} // Assuming src is a thumbnail or main image
        />
    );
};

export { LightBox };
