import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('test with on param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with on param', () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2',
        });
        expect(params).toBe('?test=value&test2=value2');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            test2: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
