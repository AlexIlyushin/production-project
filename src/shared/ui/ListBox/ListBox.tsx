import { ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/libs/classNames/classNames';
import { CheckIcon } from '@heroicons/react/20/solid';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

interface ListBoxItem {
    value: string
    content: ReactNode;
    disabled?: boolean
}
interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string
    value?: string
    onChange: (value: string) => void
    defaultValue?: string
    readonly?:boolean
    direction?: DropdownDirection;
    label?:string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'top left': cls.optionsTopLeft,
};

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
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    className={cls.trigger}
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
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,

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
