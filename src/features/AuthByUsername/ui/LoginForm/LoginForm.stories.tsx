import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import LoginForm from './LoginForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [
    StoreDecorator({
        loginForm: { username: 'admin', password: '123' },
    }),
];

export const withError = Template.bind({});
withError.args = {};

withError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            error: 'Error happened',
        },
    }),
];

export const isLoading = Template.bind({});
isLoading.args = {};

isLoading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
