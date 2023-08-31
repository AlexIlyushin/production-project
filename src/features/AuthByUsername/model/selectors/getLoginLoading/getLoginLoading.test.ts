import { getLoginLoading } from './getLoginLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginLoading.test', () => {
    test('should return boolean', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
