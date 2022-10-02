import { classNames } from 'shared/libs/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR='clear',
    OUTLINE='outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?:ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children, className, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
