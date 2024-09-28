// types
import { Notification, ProfileOption } from './types';

const notifications: Notification[] = [
    {
        icon: 'user-plus',
        variant: 'primary',
        text: 'New User Registered',
        time: '2 min ago',
    },
    {
        icon: 'message-square',
        variant: 'orange',
        text: 'A new comment on your post',
        time: '3 min ago',
    },
    {
        icon: 'paperclip',
        variant: 'success',
        text: 'A new message from',
        time: '10 min ago',
    },
    {
        icon: 'heart',
        variant: 'danger',
        text: 'A new like on your comment',
        time: '14 min ago',
    },
];

const profileOptions: ProfileOption[] = [
    {
        icon: 'user',
        label: 'Profile',
        redirectTo: '#',
    },
    {
        icon: 'settings',
        label: 'Settings',
        redirectTo: '#',
    },
    {
        icon: 'aperture',
        label: 'Support',
        redirectTo: '#',
    },
    {
        icon: 'unlock',
        label: 'Sign Out',
        redirectTo: '#',
    },
];

export { notifications, profileOptions };
