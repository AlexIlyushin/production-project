import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('Прибавить')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
