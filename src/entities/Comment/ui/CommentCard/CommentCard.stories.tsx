import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'some comment',
        user: { id: '1', username: 'testUser' },
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    comment: {
        id: '1',
        text: 'some comment',
        user: { id: '1', username: 'testUser' },
    },
    isLoading: true,
};

isLoading.parameters = {
    loki: {
        skip: true,
    },
};
