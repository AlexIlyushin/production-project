import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Alexander',
    lastname: 'Ilyushin',
    age: 21,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Stavropol',
    username: 'admin',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('without first and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('without data', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
