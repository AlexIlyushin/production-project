import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
    });
});
