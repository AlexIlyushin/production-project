import { Listbox as HListBox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { ReactNode } from 'react';

import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/libs/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './ListBox.module.scss';

interface ListBoxItem {
    /**
     * значение управляемое
     */
    value: string
    /**
     * содержимое элемента
     */
    content: ReactNode;
    /**
     * флаг отключения элемента
     */
    disabled?: boolean
}
interface ListBoxProps {
    /**
     * список элементов
     */
    items?: ListBoxItem[]
    className?: string
    /**
     * текущее значение
     */
    value?: string
    /**
     * колбек при изменении
     * @param value
     */
    onChange: (value: string) => void
    /**
     * значение по умолчанию
     */
    defaultValue?: string
    /**
     * флаг только для чтения
     */
    readonly?:boolean
    /**
     * направление выпадающего меню
     */
    direction?: DropdownDirection;
    /**
     * надпись
     */
    label?:string
}

export function ListBox(props: ListBoxProps) {
    const {
        label,
        items,
        className,
        value,
        onChange,
        defaultValue,
        readonly,
        direction = 'bottom left',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    className={popupCls.trigger}
                >

                    {value ?? defaultValue}

                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,

                                        },
                                    )}
                                >

                                    {selected && <CheckIcon className={cls.icon} />}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
