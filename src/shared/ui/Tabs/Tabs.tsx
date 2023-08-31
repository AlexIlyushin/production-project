import { useCallback } from 'react';

import { Card, CardTheme } from '../Card/Card';

import { classNames } from '@/shared/libs/classNames/classNames';
import { typedMemo } from '@/shared/types';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T,
    content: string
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: T) => void;
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const onClickHandler = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab.value);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={cls.tab}
                    onClick={onClickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
