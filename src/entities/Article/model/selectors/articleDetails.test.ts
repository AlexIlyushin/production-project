import {
    getArticleDetailsData,
    getArticleDetailError,
    getArticleDetailIsLoading,
} from './articleDetails';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('articleDetails.test', () => {
    test('should return ArticleDetail data', () => {
        const data = {
            id: '1',
            title: 'Javascript news',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('with empty ArticleDetail state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return ArticleDetail isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(true);
    });

    test('with empty ArticleDetail state loading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(
            undefined,
        );
    });

    test('should return ArticleDetail error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailError(state as StateSchema)).toEqual('error');
    });

    test('with ArticleDetail empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailError(state as StateSchema)).toEqual(undefined);
    });
});
