import { getProfileForm } from './getProfileForm';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
    first: 'Alexander',
    lastname: 'Ilyushin',
    age: 21,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Stavropol',
    username: 'admin',
};

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
