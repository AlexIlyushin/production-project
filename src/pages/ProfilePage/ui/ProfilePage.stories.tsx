import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Alexander',
                lastname: 'Ilyushin',
                age: 21,
                currency: Currency.USD,
                country: Country.Russia,
                city: 'Stavropol',
                username: 'admin',
                avatar,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: 'Alexander',
                lastname: 'Ilyushin',
                age: 21,
                currency: Currency.USD,
                country: Country.Russia,
                city: 'Stavropol',
                username: 'admin',
                avatar,
            },
        },
    }),
];
