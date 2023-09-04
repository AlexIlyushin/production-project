import { CSSProperties, memo } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string
    /**
     * высота скелета
     */
    height?:string | number
    /**
     * ширина скелета
     */
    width?:string | number
    /**
     * граница скелета
     */
    border?:string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const styles:CSSProperties = {
        height,
        width,
        borderRadius: border,
    };

    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
});
