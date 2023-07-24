import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Icon } from '../../../Icon/Icon';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: <span>Content</span>,
    trigger: <Icon Svg={NotificationIcon} />,
};
