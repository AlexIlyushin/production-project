import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi culpa cupiditate debitis illo in iure magni maiores molestiae molestias obcaecati officia officiis, perspiciatis, praesentium quaerat rem repudiandae sunt veniam.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi culpa cupiditate debitis illo in iure magni maiores molestiae molestias obcaecati officia officiis, perspiciatis, praesentium quaerat rem repudiandae sunt veniam.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
