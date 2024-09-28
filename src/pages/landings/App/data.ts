// types
import { Feature, Feature2 } from './types';

import app1 from 'assets/images/features/app3.png';
import app2 from 'assets/images/features/app4.png';

const features: Feature[] = [
    {
        icon: 'mail',
        variant: 'primary',
        title: 'First feature',
        description:
            'We use a customized application tobe specifically designed a testing gnose to keep away for people.',
    },
    {
        icon: 'shield',
        variant: 'success',
        title: 'Second feature',
        description:
            'In order to design a mobile app that is going to be module downloaded and accessed frequently by users.',
    },
    {
        icon: 'sliders',
        variant: 'orange',
        title: 'Third feature',
        description: 'A Private Limited is the most popular type of partnership Malta. The limited liabilityis',
    },
    {
        icon: 'bell',
        variant: 'info',
        title: 'Fourth feature',
        description: "Few derived into talking being in merit long you'd his the of to had the to duties, it them one…",
    },
];

const features2: Feature2[] = [
    {
        image: app1,
        shapes: ['shape1', 'shape2'],
        title: 'Quick Access to Tasks',
        description: 'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',
    },
    {
        image: app2,
        shapes: ['shape3', 'shape4'],
        title: 'Create Task Easily',
        description: 'Speedy App provides instant information on thousands of hire and buy products.',
    },
    {
        image: app2,
        shapes: ['shape5', 'shape6'],
        title: 'Quick Access to Team',
        description: 'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',
    },
];

export { features, features2 };
