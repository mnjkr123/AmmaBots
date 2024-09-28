// types
import { Feature, SpaceOption, Testimonial } from './types';

import img1 from 'assets/images/photos/8.jpg';
import img2 from 'assets/images/photos/5.jpg';
import img3 from 'assets/images/photos/4.jpg';

import Avatar1 from 'assets/images/avatars/img-8.jpg';
import Avatar2 from 'assets/images/avatars/img-5.jpg';

import Amazon from 'assets/images/brands/amazon.svg';
import Google from 'assets/images/brands/google.svg';

const features: Feature[] = [
    {
        icon: 'hard-drive',
        title: 'High-Speed Wireless',
        description: "We've watched Bootstrap grow up over the years and understand it better than almost anyone.",
    },
    {
        icon: 'users',
        title: 'Community Events',
        description:
            'You have a business to run. Stop worring about cross-browser keeping your components up to date. ',
    },
    {
        icon: 'command',
        title: 'Exercise Facilities',
        description:
            'Replacing a maintains the amount of lines. When replacing a selection objectives and then create.',
    },
    {
        icon: 'cpu',
        title: 'Comfortable Lounges',
        description: 'Risus sed vulputate odio ut enim blandit. Malesuada consequat interdum mattis facilisis.',
    },
];

const spaceOptions: SpaceOption[] = [
    {
        image: img1,
        title: 'Shared Desk',
        description:
            "Access to shared workspace and conference rooms. Most suitable to individual looking for people's company.",
        space: {
            icon: 'user',
            value: '1-5 Shared Spaces',
        },
    },
    {
        image: img2,
        title: 'Dedicated Desk',
        description: 'A dedicated desk space for you, with 24/7 access to premium amenities and conference rooms.',
        space: {
            icon: 'user',
            value: '1-5 Dedicated Spaces',
        },
    },
    {
        image: img3,
        title: 'Event Space',
        description:
            'An excluisive venue designed specifically for events of all kinds, from conferences to celebrations.',
        space: {
            icon: 'users',
            value: 'Upto 200 People',
        },
    },
];

const testimonials: Testimonial[] = [
    {
        statement: 'Great office and great location. Worth the money if it makes sense for your business.',
        customer: {
            avatar: Avatar1,
            name: 'Cersei Lannister',
            designation: 'Senior Project Manager',
        },
        logo: Google,
    },
    {
        statement: 'Awesome vibe and great staff! Top cooworking spots in the city! Loved to be here!',
        customer: {
            avatar: Avatar2,
            name: 'John Stark',
            designation: 'Engineering Director',
        },
        logo: Amazon,
    },
];
export { features, spaceOptions, testimonials };
