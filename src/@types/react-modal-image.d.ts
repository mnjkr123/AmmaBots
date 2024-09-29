declare module 'react-modal-image' {
    import React from 'react';

    interface ModalImageProps {
        mainSrc: string;
        nextSrc?: string;
        prevSrc?: string;
        onCloseRequest: () => void;
        onMoveNextRequest?: () => void;
        onMovePrevRequest?: () => void;
        imageTitle?: React.ReactNode;
        mainSrcThumbnail?: string;
    }

    const ModalImage: React.FC<ModalImageProps>;
    export default ModalImage;
}
