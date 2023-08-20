import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line lex-ander-plugin/fsd-public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line lex-ander-plugin/fsd-public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line lex-ander-plugin/fsd-public-api-imports
import { ReducersList } from '@/shared/libs/components/DynamicModuleLoader';
// eslint-disable-next-line lex-ander-plugin/fsd-public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line lex-ander-plugin/fsd-public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
// eslint-disable-next-line lex-ander-plugin/fsd-public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

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
