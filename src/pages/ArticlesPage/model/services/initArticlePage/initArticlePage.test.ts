import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlePage } from '../initArticlePage/initArticlePage';

import { TestAsyncThunk } from '@/shared/libs/tests/testAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                isLoading: false,
                page: 1,
                hasMore: true,
                ids: [],
                entities: {},
                _inited: false,
            },
        });
        const params = new URLSearchParams('');
        await thunk.callThunk(params);
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                isLoading: true,
                page: 1,
                hasMore: false,
                ids: [],
                entities: {},
                _inited: true,
            },
        });
        const params = new URLSearchParams('');
        await thunk.callThunk(params);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
