import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlePage',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFormUrl = searchParams.get('order') as SortOrder;
            const sortFormUrl = searchParams.get('sort') as ArticleSortField;
            const typeFormUrl = searchParams.get('type') as ArticleType;
            const searchFormUrl = searchParams.get('search');

            if (orderFormUrl) dispatch(articlesPageActions.setOrder(orderFormUrl));
            if (sortFormUrl) dispatch(articlesPageActions.setSort(sortFormUrl));
            if (searchFormUrl) dispatch(articlesPageActions.setSearch(searchFormUrl));
            if (typeFormUrl) dispatch(articlesPageActions.setType(typeFormUrl));

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
