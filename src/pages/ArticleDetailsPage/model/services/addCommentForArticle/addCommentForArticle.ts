import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import {
    fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            extra,
            dispatch,
            rejectWithValue,
            getState,
        } = thunkAPI;

        const user = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!user || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>(
                '/comments',
                {
                    articleId: article.id,
                    text,
                    userId: user.id,
                },
            );
            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data; // перехватывается extra редюсерами
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
