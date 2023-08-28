import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import { loginReducer } from '@/features/AuthByUsername/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { ReducersList } from '@/shared/libs/components/DynamicModuleLoader';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
// eslint-disable-next-line lex-ander-plugin/fsd-public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
import { profileReducer } from '@/features/editableProfileCard/testing';

const defaultAsyncReducer: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
