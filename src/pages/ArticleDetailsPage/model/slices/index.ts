import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import {
    articleDetailsPageRecommendationsReducer,
} from './articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>(
    {
        recommendations: articleDetailsPageRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    },
);
