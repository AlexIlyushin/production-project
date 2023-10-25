import { CSSProperties, useMemo } from 'react';

import UserIcon from '../../assets/icons/user-filled.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    /**
     *   Изображение
     */
    src?: string;
    /**
     *   Размер
     */
    size?: number;
    /**
     * альтернативный текст
     */
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt, fallbackInverted } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            height: size,
            width: size,
        }),
        [size],
    );

    const errorFallback = (
        <Icon
            Svg={UserIcon}
            inverted={fallbackInverted}
            width={size}
            height={size}
        />
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
