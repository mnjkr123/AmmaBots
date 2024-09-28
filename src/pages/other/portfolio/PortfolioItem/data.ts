// type
import { GalleryItem, WorkImages } from '../types';

const gallery: GalleryItem[] = [
    {
        id: 1,
        image: {
            src: 'https://source.unsplash.com/sScmok4Iq1o/1920x1260',
            caption: 'Office Desks',
        },
    },
    {
        id: 2,
        image: {
            src: 'https://source.unsplash.com/6ba_vdgx_go/1920x1260',
            caption: 'Office Desks',
        },
    },
];

const workImages: WorkImages[] = [
    {
        icon: 'figma',
        title: 'UI/UX Design',
    },
    {
        icon: 'hexagon',
        title: 'Brand Identity',
    },
    {
        icon: 'image',
        title: 'Web Devblopment',
    },
];

export { gallery, workImages };
