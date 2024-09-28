import { Post } from 'components/blog';
// images
import postImg1 from 'assets/images/blog/post1.jpg';
import postImg2 from 'assets/images/blog/post3.jpg';

import avatar1 from 'assets/images/avatars/img-4.jpg';
import avatar2 from 'assets/images/avatars/img-2.jpg';
import avatar3 from 'assets/images/avatars/img-7.jpg';

import crypto1 from 'assets/images/blog/crypto1.jpg';
import crypto2 from 'assets/images/blog/crypto2.jpg';

const post1: Post[] = [
    {
        image: postImg1,
        tag: { variant: 'orange', value: 'Announcement' },
        title: 'Announcing the free upgrade for the subscribed plans',
        description:
            'We are glad to announce that, we are going to upgrade all the subscribed accounts with the premium features this week...',
        postedBy: {
            avatar: avatar1,
            name: 'Emily Blunt',
        },
        postedOn: {
            date: '11 Mar, 2020',
            time: '3 min read',
        },
    },
    {
        image: postImg1,
        tag: { variant: 'info', value: 'Community' },
        title: 'Will Web Design Ever Rule the World?',
        description:
            'The web is changed in the current era a lot. Many new trends are being used in the market at the moment...',
        postedBy: {
            avatar: avatar2,
            name: 'Greeva N',
        },
        postedOn: {
            date: '9 Mar, 2020',
            time: '5 min read',
        },
    },
];

const post2: Post[] = [
    {
        image: crypto1,
        tag: { variant: 'orange', value: 'Announcement' },
        title: 'Introducing new blazzing fast user interface',
        description:
            'Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...',
    },
    {
        image: crypto2,
        tag: { variant: 'success', value: 'Tutorial' },
        title: 'What you should know before considering the prompt',
        description:
            'We are giving a pretty extensive guideline and context before you make your decision to consider prompt...',
    },
    {
        image: crypto1,
        tag: { variant: 'info', value: 'Community' },
        title: 'Your Way to a Successful Sales Campaigns',
        description:
            'Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads...',
    },
];

const post3: Post[] = [
    {
        image: postImg2,
        tag: { variant: 'danger', value: 'Resource' },
        title: 'Top 10 ideas to improve the team productivity',
        groupAvatars: [avatar3, avatar1, avatar2],
    },
];

export { post1, post2, post3 };
