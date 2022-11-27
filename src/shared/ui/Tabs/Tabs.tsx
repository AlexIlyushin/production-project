import { classNames } from 'shared/libs/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

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

export const Tabs = <T extends string>(props: TabsProps<T>) => {
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
};
