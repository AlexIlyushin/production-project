import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    /**
     *  Содержимое карточки
     */
    children: ReactNode;
    /**
     * Тема карточки
     */
    theme?: CardTheme;
    /**
     * 100% ширина
     */
    max?: boolean;
}

export const Card = memo(
    ({
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    }: CardProps) => (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    ),
);
