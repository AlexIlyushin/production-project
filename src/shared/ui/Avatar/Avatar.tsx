import { CSSProperties, useMemo } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    /**
     *   Изображение
     */
    src?: string
    /**
     *   Размер
     */
    size?: number
    /**
     * альтернативный текст
     */
    alt?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({ height: size || 100, width: size || 100 }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
