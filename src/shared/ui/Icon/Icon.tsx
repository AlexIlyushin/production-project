import React, { memo } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    /**
     * иконка
     */
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    /**
     * инвертировать цвет иконки
     */
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;
    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                className,
            ])}
            {...otherProps}
        />
    );
});
