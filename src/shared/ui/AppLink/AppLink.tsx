import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Applink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
