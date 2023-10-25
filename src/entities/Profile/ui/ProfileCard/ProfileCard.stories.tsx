import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Alexander',
        lastname: 'Ilyushin',
        age: 21,
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Stavropol',
        username: 'admin',
        avatar,
    },
};
export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
