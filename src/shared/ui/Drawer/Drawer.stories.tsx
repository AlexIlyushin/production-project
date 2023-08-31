import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Drawer } from './Drawer';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isOpen: true,
    children: 'content',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: 'content',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
