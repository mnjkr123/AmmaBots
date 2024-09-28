import { Post } from 'components/blog';
import { MenuItem } from 'types';
import { GalleryItem, ImageType } from './types';

// images
import photo1 from 'assets/images/photos/4.jpg';

import avatar1 from 'assets/images/avatars/img-4.jpg';
import avatar2 from 'assets/images/avatars/img-2.jpg';
import avatar3 from 'assets/images/avatars/img-7.jpg';

import img1 from 'assets/images/photos/1.jpg';
import img2 from 'assets/images/photos/2.jpg';
import img3 from 'assets/images/photos/3.jpg';
import img4 from 'assets/images/photos/4.jpg';
import img5 from 'assets/images/photos/5.jpg';
import img6 from 'assets/images/photos/6.jpg';

import img7 from 'assets/images/photos/11.jpg';
import img8 from 'assets/images/photos/5.jpg';
import img9 from 'assets/images/photos/7.jpg';
import img10 from 'assets/images/photos/8.jpg';
import img11 from 'assets/images/photos/10.jpg';

const rightMenuItems: MenuItem[] = [
    {
        key: 'avatars',
        label: 'Avatars',
    },
    {
        key: 'blog-items',
        label: 'Blog Items',
    },
    {
        key: 'gallery',
        label: 'Gallery',
    },
    {
        key: 'icons',
        label: 'Icons',
    },
    {
        key: 'pricing-cards',
        label: 'Pricing Cards',
    },
];

const post: Post[] = [
    {
        image: photo1,
        tag: { variant: 'success', value: 'Travel' },
        overlay: 'dark',
        title: 'Top 10 must visit best beaches of Goa',
        groupAvatars: [avatar3, avatar1, avatar2],
        description: "Goa and its beaches do not need an introduction! The state is well known for its spectacular beaches and it is very difficult",
        postedBy: {
            name: "John Deo",
            avatar: avatar1,
        },
        postedOn: {
            date: '11 March, 2020',
            time: '02 am'
        }
    },
];

const gallery: GalleryItem[] = [
    {
        id: 1,
        image: {
            src: img1,
            caption: 'Spacious sitting arrangement',
        },
    },
    {
        id: 2,
        image: {
            src: img2,
            caption: 'A lavish outside style',
        },
    },
    {
        id: 3,
        image: {
            src: img3,
            caption: 'A lavish inside style',
        },
    },
    {
        id: 4,
        image: {
            src: img4,
            caption: 'Another inside view',
        },
    },
    {
        id: 5,
        image: {
            src: img5,
            caption: 'Smart works',
        },
    },
    {
        id: 6,
        image: {
            src: img6,
            caption: 'Lavish styled room',
        },
    },
];

const galleryImages: ImageType[] = [
    {
        src: img7,
        caption: 'Spacious sitting arrangement',
    },
    {
        src: img8,
        caption: 'A lavish outside style',
    },
    {
        src: img9,
        caption: 'A lavish inside style',
    },
    {
        src: img10,
        caption: 'Another inside view',
    },
    {
        src: img11,
        caption: 'Another inside view',
    },
];

export { rightMenuItems, post, gallery, galleryImages };
