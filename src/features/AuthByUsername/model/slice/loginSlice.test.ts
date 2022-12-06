import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('setUsername', () => {
        const state:DeepPartial<LoginSchema> = {
            username: '',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123')))
            .toEqual({ username: '123' });
    });
    test('setPassword', () => {
        const state:DeepPartial<LoginSchema> = {
            password: '',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345')))
            .toEqual({ password: '12345' });
    });
});
