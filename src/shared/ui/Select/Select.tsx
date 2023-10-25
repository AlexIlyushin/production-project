import { ChangeEvent, useMemo } from 'react';

import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import { typedMemo } from '@/shared/types';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    /**
     * надпись
     */
    label?: string;
    /**
     * опции селекта
     */
    options?: SelectOption<T>[];
    /**
     *  управляемое значение
     */
    value?: T;
    /**
     * колбек на изменение *
     * @param value
     */
    onChange?: (value: T) => void;
    /**
     * флаг только для чтения *
     */
    readonly?: boolean;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const { className, label, options, onChange, value, readonly } = props;

    const optionsList = useMemo(
        () =>
            options?.map((item) => (
                <option
                    key={item.content}
                    value={item.value}
                    className={cls.option}
                >
                    {item.content}
                </option>
            )),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
