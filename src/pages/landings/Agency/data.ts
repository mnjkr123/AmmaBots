// types
import { JobDetail, BlogPost, Service } from './types';

// images

import coworking1 from 'assets/images/hero/coworking1.jpg';
import coworking2 from 'assets/images/hero/coworking2.jpg';
import coworking3 from 'assets/images/hero/coworking3.jpg';

const services: Service[] = [
    {
        icon: 'figma',
        variant: 'primary',
        title: 'User Experience Design',
        description:
            'Following the best process that a great design teams use to create products that provide meaningful and relevant experiences to users',
    },
    {
        icon: 'image',
        variant: 'orange',
        title: 'Front End Development',
        description:
            'Development of the websites for businesses of all sizes and shapes and covering a small to enterprise organizations',
    },
    {
        icon: 'hexagon',
        variant: 'success',
        title: 'Brand Identitty Design',
        description:
            'Making a new identities for your brand with an effective collaboration and considered design. We treat your brand like our own',
    },
];

const blogPosts: BlogPost[] = [
    {
        heading: 'Design',
        img: coworking1,
        time: '11 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'Single page websites are taking over the world, and thats why I would like you to present the best ...',
    },
    {
        heading: 'Development',
        img: coworking2,
        time: '12 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to...',
    },
    {
        heading: 'Design',
        img: coworking3,
        time: '13 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'The following Italian restaurant WordPress themes come with the powerful drag-n-drop...',
    },
];

const jobDetails: JobDetail[] = [
    {
        designation: 'Front-End Developer',
        location: 'Los Angeles',
        jobType: 'Remote',
    },
    {
        designation: 'Community Manager',
        location: 'New York',
        jobType: 'Full-Time',
    },
    {
        designation: 'UX/UI Designer',
        location: 'New York',
        jobType: 'Full-Time',
    },
];

export { services, blogPosts, jobDetails };
