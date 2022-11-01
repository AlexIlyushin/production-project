import { classNames, Mods } from 'shared/libs/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
    value: string,
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?:boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, onChange, value, readonly,
    } = props;

    const optionsList = useMemo(() => (
        options?.map((item) => (
            <option
                key={item.content}
                value={item.value}
                className={cls.option}
            >
                {item.content}
            </option>
        ))
    ), [options]);

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods:Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span
                    className={cls.label}
                >
                    {`${label}>`}
                </span>
            )}
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
