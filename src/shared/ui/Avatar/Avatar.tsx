import { classNames } from 'shared/libs/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
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
