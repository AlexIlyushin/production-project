import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string
    value?:Currency,
    onChange?:(value:Currency)=>void
    readonly?:boolean
}
const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EURO, content: Currency.EURO },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            readonly={readonly}
            className={className}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            items={options}
            direction="bottom right"
        />
    );
});
