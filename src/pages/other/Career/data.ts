// types
import { Benefit, GalleryItem, Vacancy } from './types';

// images
import img1 from 'assets/images/photos/3.jpg';
import img2 from 'assets/images/photos/4.jpg';
import img3 from 'assets/images/photos/5.jpg';
import img4 from 'assets/images/photos/10.jpg';

const benefits: Benefit[] = [
    {
        icon: 'compass',
        title: 'Relocation Support',
        description: "We'll help to move and get settled and handle the visa process for you",
    },
    {
        icon: 'server',
        title: 'Technology',
        description: 'A special training to get start with our technical stack by professionals',
    },
    {
        icon: 'dollar-sign',
        title: 'Growth budget',
        description: 'A specific budget for your professionals growth which you spend on throughout the year',
    },
    {
        icon: 'users',
        title: 'Team activities & retreats',
        description: "Many team building activities and retreat every quarter, so you don't get bored",
    },
    {
        icon: 'map-pin',
        title: 'Work from anywhere',
        description: 'Work from anywhere you like. We offer remote working to all the employees',
    },
    {
        icon: 'coffee',
        title: 'Work/life balance',
        description: 'Flexible work hours gives you complete balance with your personal and professional life.',
    },
];

const gallery: GalleryItem[] = [
    {
        id: 3,
        image: {
            src: img1,
            caption: 'Office Desks',
        },
    },
    {
        id: 4,
        image: {
            src: img2,
            caption: 'Meeting Room view',
        },
    },
    {
        id: 5,
        image: {
            src: img4,
            caption: 'Outside view',
        },
    },
    {
        id: 6,
        image: {
            src: img3,
            caption: 'A common seating area',
        },
    },
];

const vacancies: Vacancy[] = [
    {
        category: 'Engineering',
        jobs: [
            {
                designation: 'Techical Support Engineer',
                type: 'Remote',
            },
            {
                designation: 'Senior Software Engineer (Frontend)',
                type: 'Remote',
            },
            {
                designation: 'Senior Software Engineer (Backend)',
                type: 'Remote',
            },
            {
                designation: 'Engineering Manager',
                type: 'Remote',
            },
        ],
    },
    {
        category: 'Marketing',
        jobs: [
            {
                designation: 'Junior copywriter/editor',
                type: 'Remote',
            },
        ],
    },
];

export { benefits, gallery, vacancies };
