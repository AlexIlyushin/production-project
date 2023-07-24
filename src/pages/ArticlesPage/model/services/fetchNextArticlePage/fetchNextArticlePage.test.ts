import { TestAsyncThunk } from '@/shared/libs/tests/testAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlePage } from './fetchNextArticlePage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                isLoading: false,
                page: 1,
                hasMore: true,
                ids: [],
                entities: {},
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({});
    });
    test('fetch not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                isLoading: true,
                page: 1,
                hasMore: false,
                ids: [],
                entities: {},
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
