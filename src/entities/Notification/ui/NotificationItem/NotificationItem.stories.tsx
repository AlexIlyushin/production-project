import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.args = {
    item: {
        id: '',
        title: 'title',
        description: 'description',
    },
};
