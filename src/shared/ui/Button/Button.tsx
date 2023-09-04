import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/libs/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    /**
     *   Тема для кнопки
     */
    theme?: ButtonTheme
    /**
     * сделать кнопку квадратной
     */
    square?: boolean
    /**
     *  размер кнопки
     */
    size?:ButtonSize
    /**
     * отключение кнопки
     */
    disabled?:boolean
    /**
     * содержимое кнопки
     */
    children?:ReactNode
    /**
     *  сделать кнопку на всю ширину
     */
    fullWidth?:boolean
}

export const Button = (props:ButtonProps) => {
    const {
        children,
        className,
        square,
        disabled,
        size = ButtonSize.M,
        theme = ButtonTheme.OUTLINE,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
